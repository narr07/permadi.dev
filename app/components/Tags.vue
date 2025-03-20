<script setup lang="ts">
const route = useRoute()
const { locale, t } = useI18n()
const localePath = useLocalePath()
const router = useRouter()

// Fetch blog data dengan penanganan kesalahan
const { data: blogs } = await useAsyncData(
  route.path,
  () => {
    return queryCollection(`blog_${locale.value}`)
      .select('title', 'tags')
      .order('date', 'DESC')
      .all()
  },
  {
    watch: [locale],
  },
)

// Mengambil semua tag dari setiap artikel
const tags = computed<string[]>(() => {
  const selectedTags = new Set<string>()
  if (blogs.value?.length) {
    blogs.value.forEach((blog) => {
      if (blog.tags?.length) {
        blog.tags.forEach((tag) => {
          selectedTags.add(tag)
        })
      }
    })
  }
  return Array.from(selectedTags)
})

// State untuk menyimpan tag yang dipilih
const selectedTag = ref('')

// Fungsi untuk menangani pemilihan tag
function handleTagSelect(tag: string) {
  if (tag) {
    router.push(localePath(`/blog/tags/${tag}`))
  }
}
</script>

<template>
  <div class="flex w-full items-center justify-end">
    <USelect
      v-model="selectedTag"
      :ui="{
        trailingIcon:
          'group-data-[state=open]:rotate-180 transition-transform duration-200',
        placeholder: 'truncate text-permadi-800 dark:text-permadi-300',
      }"
      highlight
      :items="tags"
      selected-icon="ph:hand-swipe-left-duotone"
      :placeholder="t('blog.tags')"
      class="w-32"
      @update:model-value="handleTagSelect"
    />
  </div>
</template>
