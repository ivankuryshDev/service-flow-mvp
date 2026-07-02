import type { Metadata } from 'next';
import { PageShell } from '@/components/layout/PageShell';

export const metadata: Metadata = {
  title: 'Search Results · ServiceFlow',
};
import { Container } from '@/components/layout/Container';
import { ResultsHeader } from '@/components/customer/ResultsHeader';
import { ResultsFilters } from '@/components/customer/ResultsFilters';
import { ResultsList } from '@/components/customer/ResultsList';
import type { ResultItem } from '@/components/customer/ResultsList';
import { mockServices } from '@/data/mockServices';
import { mockProviders } from '@/data/mockProviders';
import { mockAvailability } from '@/data/mockAvailability';
import { formatSlotLabel, formatTime } from '@/lib/dates';
import { matchesMaxPrice, matchesRating, matchesAvail, hasActiveFilters } from '@/lib/filters';

type PageSearchParams = Promise<{
  category?: string;
  location?: string;
  date?: string;
  sort?: string;
  maxPrice?: string;
  rating?: string;
  avail?: string;
  // Read-only alias for `avail`; some incoming/shared URLs use this spelling.
  // `avail` always wins when both are present.
  availability?: string;
}>;

export default async function ResultsPage(props: { searchParams: PageSearchParams }) {
  const { category, location, date, sort, maxPrice, rating, avail, availability } =
    await props.searchParams;
  const effectiveAvail = avail ?? availability;
  // Read-only alias for the canonical `week` value; the UI never writes this.
  const normalizedAvail = effectiveAvail === 'this-week' ? 'week' : effectiveAvail;
  const today = new Date().toISOString().slice(0, 10);

  // Compute week end for "this week" availability filter
  const weekEndDate = new Date(today + 'T00:00:00');
  weekEndDate.setDate(weekEndDate.getDate() + 7);
  const weekEnd = weekEndDate.toISOString().slice(0, 10);

  // Filter services by category (case-insensitive exact match)
  const matchedServices = category
    ? mockServices.filter((s) => s.category.toLowerCase() === category.toLowerCase())
    : mockServices;

  const matchedServiceIds = new Set(matchedServices.map((s) => s.id));

  // Filter providers by service overlap and optional location substring
  const matchedProviders = mockProviders.filter((p) => {
    const hasService = p.serviceIds.some((id) => matchedServiceIds.has(id));
    const locationMatch = location
      ? p.location.toLowerCase().includes(location.toLowerCase())
      : true;
    return hasService && locationMatch;
  });

  // Build one result item per (provider, service) pair
  const fromDate = date ?? today;
  const allResults: ResultItem[] = [];

  for (const provider of matchedProviders) {
    for (const service of matchedServices) {
      if (!provider.serviceIds.includes(service.id)) continue;

      const providerServiceSlots = mockAvailability.filter(
        (slot) => slot.providerId === provider.id && slot.serviceId === service.id,
      );

      const nextSlot =
        providerServiceSlots
          .filter((slot) => slot.status === 'available' && slot.date >= fromDate)
          .sort(
            (a, b) =>
              a.date.localeCompare(b.date) || a.startTime.localeCompare(b.startTime),
          )[0] ?? null;

      // Display-only: today's available slots for this provider/service pair.
      // Never used for filtering, sorting, or URL params.
      const todaysAvailableSlots = providerServiceSlots
        .filter((slot) => slot.status === 'available' && slot.date === today)
        .sort((a, b) => a.startTime.localeCompare(b.startTime));
      const openTodayCount = todaysAvailableSlots.length;
      const openTodaySlotTimes = todaysAvailableSlots
        .slice(0, 2)
        .map((slot) => formatTime(slot.startTime));

      allResults.push({
        provider,
        service,
        nextSlot,
        nextSlotLabel: nextSlot ? formatSlotLabel(nextSlot, today) : null,
        openTodayCount,
        openTodaySlotTimes,
      });
    }
  }

  // Apply non-price filter controls first, so the price slider's ceiling
  // reflects what's reachable regardless of the currently selected maxPrice.
  const baseResultsForPriceRange = allResults.filter(
    (item) =>
      matchesRating(item.provider.rating, rating) &&
      matchesAvail(item.nextSlot?.date ?? null, normalizedAvail, today, weekEnd),
  );

  const sliderMaxPrice =
    baseResultsForPriceRange.length > 0
      ? Math.max(...baseResultsForPriceRange.map((item) => item.service.priceFrom))
      : Math.max(...mockServices.map((s) => s.priceFrom));

  const rawMaxPrice = maxPrice !== undefined ? Number(maxPrice) : undefined;
  const currentMaxPrice =
    rawMaxPrice !== undefined && Number.isFinite(rawMaxPrice) && rawMaxPrice < sliderMaxPrice
      ? Math.max(0, rawMaxPrice)
      : undefined;

  const results = baseResultsForPriceRange.filter((item) =>
    matchesMaxPrice(item.service.priceFrom, currentMaxPrice),
  );

  // Sort: price-asc or default recommended/top-rated (rating desc)
  if (sort === 'price-asc') {
    results.sort((a, b) => a.service.priceFrom - b.service.priceFrom);
  } else {
    results.sort((a, b) => b.provider.rating - a.provider.rating);
  }

  // Clear-filters URL: preserves location and date only
  const clearBase = new URLSearchParams();
  if (location) clearBase.set('location', location);
  if (date) clearBase.set('date', date);
  const clearHref = `/results${clearBase.size ? `?${clearBase}` : ''}`;

  const isActive = !!category || hasActiveFilters(currentMaxPrice, rating, normalizedAvail, sort);

  return (
    <PageShell>
      <div className="min-h-[calc(100vh-65px)] bg-cream-50 py-8 sm:py-12">
        <Container>
          <div className="flex flex-col gap-6">
            <ResultsHeader
              count={results.length}
              category={category}
              location={location}
              date={date}
            />
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-8">
              <aside className="w-full lg:w-64 lg:shrink-0">
                <ResultsFilters
                  category={category}
                  location={location}
                  date={date}
                  sort={sort}
                  sliderMaxPrice={sliderMaxPrice}
                  currentMaxPrice={currentMaxPrice}
                  rating={rating}
                  avail={normalizedAvail}
                  isActive={isActive}
                  clearHref={clearHref}
                />
              </aside>
              <div className="min-w-0 flex-1">
                <ResultsList
                  results={results}
                  category={category}
                  location={location}
                  hasActiveFilters={isActive}
                  clearHref={clearHref}
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </PageShell>
  );
}
