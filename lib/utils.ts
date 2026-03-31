export function formatDate(dateString: string) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(dateString));
}

export function readingTime(minutes: number) {
  return `${minutes} min read`;
}

export function toSlug(value: string) {
  return value
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}
