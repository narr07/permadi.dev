// app/composables/useReadingTime.ts
function extractTextFromBody(body: any): string {
  if (!body?.value || !Array.isArray(body.value))
    return ''

  return body.value.reduce((text: string, item: any[]) => {
    return `${text} ${processItem(item)}`
  }, '')
}

function processItem(item: any[]): string {
  if (Array.isArray(item)) {
    return item.map(processElement).join(' ')
  }
  return ''
}

function processElement(element: any): string {
  if (typeof element === 'string')
    return element
  if (Array.isArray(element))
    return extractTextFromBody({ value: [element] })
  if (element?.value)
    return element.value
  return ''
}

function calculateReadingTime(body: any): number {
  const text = extractTextFromBody(body)
  const wordsPerMinute = 200
  const words = text.trim().split(/\s+/).length
  return Math.ceil(words / wordsPerMinute)
}
function countTotalWords(body: any): number {
  const text = extractTextFromBody(body)
  return text.trim().split(/\s+/).length
}
function useReadingTime() {
  const { locale } = useI18n()
  const formatReadingTime = (minutes: number): string =>
    locale.value === 'id' ? `${minutes} menit baca` : `${minutes} min read`

  return {
    calculateReadingTime,
    formatReadingTime,
    countTotalWords,
  }
}

export default useReadingTime
