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
import { formatSlotLabel } from '@/lib/dates';
import { matchesPrice, matchesRating, matchesAvail, hasActiveFilters } from '@/lib/filters';

type PageSearchParams = Promise<{
  category?: string;
  location?: string;
  date?: string;
  sort?: string;
  price?: string;
  rating?: string;
  avail?: string;
}>;

export default async function ResultsPage(props: { searchParams: PageSearchParams }) {
  const { category, location, date, sort, price, rating, avail } = await props.searchParams;
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

      const nextSlot =
        mockAvailability
          .filter(
            (slot) =>
              slot.providerId === provider.id &&
              slot.serviceId === service.id &&
              slot.status === 'available' &&
              slot.date >= fromDate,
          )
          .sort(
            (a, b) =>
              a.date.localeCompare(b.date) || a.startTime.localeCompare(b.startTime),
          )[0] ?? null;

      allResults.push({
        provider,
        service,
        nextSlot,
        nextSlotLabel: nextSlot ? formatSlotLabel(nextSlot, today) : null,
      });
    }
  }

  // Apply filter controls
  const results = allResults.filter(
    (item) =>
      matchesPrice(item.service.priceFrom, price) &&
      matchesRating(item.provider.rating, rating) &&
      matchesAvail(item.nextSlot?.date ?? null, avail, today, weekEnd),
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

  const isActive = hasActiveFilters(price, rating, avail, sort);

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
                  price={price}
                  rating={rating}
                  avail={avail}
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
