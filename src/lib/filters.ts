export function matchesMaxPrice(priceFrom: number, maxPrice: number | undefined): boolean {
  if (maxPrice === undefined) return true;
  return priceFrom <= maxPrice;
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
  maxPrice?: number,
  rating?: string,
  avail?: string,
  sort?: string,
): boolean {
  return (
    maxPrice !== undefined ||
    (!!rating && rating !== 'any') ||
    (!!avail && avail !== 'any') ||
    (!!sort && sort !== 'recommended')
  );
}
