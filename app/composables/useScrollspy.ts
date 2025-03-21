export function useScrollspy() {
  const observer = ref() as Ref<IntersectionObserver>
  const visibleHeadings = ref([]) as Ref<string[]>
  const activeHeadings = ref([]) as Ref<string[]>

  const observerCallback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      const id = entry.target.id

      if (entry.isIntersecting)
        visibleHeadings.value.push(id)
      else visibleHeadings.value = visibleHeadings.value.filter(t => t !== id)
    })
  }

  const updateHeadings = (headings: Element[]) => {
    headings.forEach((heading) => {
      observer.value.observe(heading)
    })
  }

  watch(visibleHeadings, (newVal, oldVal) => {
    nextTick(() => {
      // <-- Tambahkan nextTick di sini
      if (newVal.length === 0) {
        activeHeadings.value = oldVal
      }
      else {
        activeHeadings.value = newVal
        if (newVal[0] && !activeHeadings.value.includes(newVal[0])) {
          activeHeadings.value.unshift(newVal[0])
        }
      }
    })
  })

  // Buat intersection observer
  onBeforeMount(() => {
    observer.value = new IntersectionObserver(observerCallback)
  })

  // Hancurkan observer ketika komponen tidak digunakan lagi
  onBeforeUnmount(() => {
    observer.value?.disconnect()
  })

  return {
    visibleHeadings,
    activeHeadings,
    updateHeadings,
  }
}
