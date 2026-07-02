export function matchesPrice(priceFrom: number, filter: string | undefined): boolean {
  if (!filter || filter === 'any') return true;
  if (filter === 'under50') return priceFrom < 50;
  if (filter === '50-100') return priceFrom >= 50 && priceFrom <= 100;
  if (filter === '100plus') return priceFrom > 100;
  return true;
}

export function matchesRating(rating: number, filter: string | undefined): boolean {
  if (!filter || filter === 'any') return true;
  const min = parseFloat(filter);
  return !isNaN(min) && rating >= min;
}

export function matchesAvail(
  slotDate: string | null,
  filter: string | undefined,
  today: string,
  weekEnd: string,
): boolean {
  if (!filter || filter === 'any') return true;
  if (!slotDate) return false;
  if (filter === 'today') return slotDate === today;
  if (filter === 'week') return slotDate >= today && slotDate <= weekEnd;
  return true;
}

export function hasActiveFilters(
  price?: string,
  rating?: string,
  avail?: string,
  sort?: string,
): boolean {
  return (
    (!!price && price !== 'any') ||
    (!!rating && rating !== 'any') ||
    (!!avail && avail !== 'any') ||
    (!!sort && sort !== 'recommended')
  );
}
