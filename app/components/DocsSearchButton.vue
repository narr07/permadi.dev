// app/components/DocsSearchButton.vue
<script setup lang="ts">
// Ambil locale dari i18n
const { locale } = useI18n()
const localePath = useLocalePath()

// Ref untuk istilah pencarian, hasil pencarian, dan status modal
const searchTerm = ref('')
const search = ref<{ id: string, title: string, titles: string[], level: number, content: string }[]>([])
const open = ref(false)
const value = ref({})

// Router untuk navigasi
const router = useRouter()

// Fungsi untuk memperbarui data pencarian
async function updateSearchData() {
  const { data } = await useLazyAsyncData(`search-data-${locale.value}`, () =>
    queryCollectionSearchSections(`blog_${locale.value}`))
  if (data.value) {
    search.value = data.value
  }
  else {
    search.value = []
  }
}

// Panggil pertama kali saat komponen di-mount
await updateSearchData()

// Watch perubahan locale dan perbarui data pencarian
watch(locale, async () => {
  await updateSearchData()
})

// Computed untuk membuat grup berdasarkan hasil pencarian
const groups = computed(() => [
  {
    id: 'blog',
    label: searchTerm.value
      ? `Blog posts matching “${searchTerm.value}”...`
      : 'Blog Posts',
    items: search.value
      .filter(item =>
        item.title.toLowerCase().includes(searchTerm.value.toLowerCase())
        || item.content.toLowerCase().includes(searchTerm.value.toLowerCase()),
      ) // Filter berdasarkan istilah pencarian di title atau content
      .map(item => ({
        id: item.id,
        label: item.title,
        suffix: `${item.content.slice(0, 50)}...`, // Tambahkan level dan cuplikan konten
        description: item.titles.join(' > '), // Tampilkan hierarki judul jika ada
        to: localePath(`/blog${item.id}`),
      })),
    ignoreFilter: true,
  },
])

// Fungsi untuk menangani pemilihan item di command palette
function onSelect(item: any) {
  if (item.onSelect) {
    item.onSelect()
  }
  else if (item.to) {
    if (typeof item.to === 'string' && (item.target === '_blank' || item.to.startsWith('http'))) {
      window.open(item.to, item.target || '_blank')
    }
    else {
      router.push(item.to)
    }
  }
  open.value = false // Tutup modal setelah navigasi
}

// Shortcut keyboard untuk membuka modal pencarian
defineShortcuts({
  meta_k: () => {
    open.value = !open.value
  },
})
</script>

<template>
  <!-- Modal dengan Command Palette -->
  <UModal
    v-model:open="open"
    :ui="{
      content: 'rounded max-w-[calc(100%-1rem)] h-80 sm:h-auto sm:max-h-[calc(100vh-4rem)] mx-2 mx-auto overflow-y-auto',
    }"
    close-icon="ph:x-square-duotone"
  >
    <!-- Tombol untuk membuka modal -->
    <UButton
      square
      icon="hugeicons:search-02"
      aria-label="Search"
      class="button"
      @click="open = true"
    />

    <!-- Konten Command Palette -->
    <template #content>
      <UCommandPalette
        v-model="value"
        v-model:search-term="searchTerm"
        :groups="groups"
        class="flex-1 p-4 overflow-auto"
        :ui="{
          root: 'flex flex-col min-h-0 min-w-0 divide-y divide-[var(--ui-border)]',
        }"
        :fuse="{
          resultLimit: 10,
          matchAllWhenSearchEmpty: true,
          fuseOptions: { includeMatches: true },
        }"
        @update:model-value="onSelect"
      />
    </template>
  </UModal>
</template>
