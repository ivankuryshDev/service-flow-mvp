import type { Metadata } from 'next';
import { PageShell } from '@/components/layout/PageShell';
import { HomeHero } from '@/components/customer/HomeHero';
import { SearchPanel } from '@/components/customer/SearchPanel';
import { PopularCategories } from '@/components/customer/PopularCategories';
import { HomeBenefits } from '@/components/customer/HomeBenefits';
import { BusinessCta } from '@/components/customer/BusinessCta';

export const metadata: Metadata = {
  title: 'Find local services · ServiceFlow',
  description: 'Search for local services, compare providers and book available time slots — fast and fee-free.',
};

export default function HomePage() {
  return (
    <PageShell>
      <HomeHero>
        <SearchPanel />
      </HomeHero>
      <PopularCategories />
      <HomeBenefits />
      <BusinessCta />
    </PageShell>
  );
}
