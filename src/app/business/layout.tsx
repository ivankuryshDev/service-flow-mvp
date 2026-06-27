import { BusinessSidebar } from '@/components/layout/BusinessSidebar';

export default function BusinessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <BusinessSidebar />
      <main className="flex-1 overflow-auto bg-cream-50">{children}</main>
    </div>
  );
}