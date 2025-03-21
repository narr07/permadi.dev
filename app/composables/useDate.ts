// app/composables/useDate.ts
export function formatDate(date: string | Date, locale: string) {
  const parsedDate = typeof date === 'string' ? new Date(date) : date
  return parsedDate.toLocaleDateString(locale === 'id' ? 'id-ID' : 'en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}
