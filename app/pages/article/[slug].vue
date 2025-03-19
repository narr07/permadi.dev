<script lang="ts" setup>
import type { Collections } from '@nuxt/content'
import { queryCollection, useRoute } from '#imports'
import { withLeadingSlash } from 'ufo'

const { t } = useI18n()
const { locale } = useI18n()
const localePath = useLocalePath()

// Ambil rute sekali saat inisialisasi
const route = useRoute()
const slug = computed(() => withLeadingSlash(String(route.params.slug)))

// Ambil data artikel saat ini
const { data: pageBlog } = await useAsyncData(`blogPage-${locale.value}-${slug.value}`, async () => {
  const collection = (`blog_${locale.value}`) as keyof Collections
  const content = await queryCollection(collection).path(slug.value).first()
  if (!content)
    throw new Error('Content not found')
  return content
}, {
  watch: [locale], // Pastikan slug juga dipantau
})

useSeoMeta({
  title: pageBlog.value?.title,
  description: pageBlog.value?.description,
  ogTitle: pageBlog.value?.title,
  ogDescription: pageBlog.value?.description,
  keywords: pageBlog.value?.tags
    ? pageBlog.value.tags.join(', ')
    : 'dinar, permadi, dinar permadi, guru, developer, programmer',
  author: 'Dinar Permadi Yusup',
  articleAuthor: ['Dinar Permadi Yusup'],
  articleSection: () => pageBlog.value?.title,
  articleTag: () => pageBlog.value?.tags,
  ogType: 'article',
  twitterTitle: () => pageBlog.value?.title,
  twitterDescription: () => pageBlog.value?.description,
  twitterData1: 'Dinar Permadi Yusup',
  twitterLabel1: 'Author',
  // twitterData2: () => formatReadingTime(calculateReadingTime(pageBlog.value?.body)),
  twitterLabel2: 'Read Time',

})
</script>

<template>
  <UContainer>
    <UCard class="mb-2">
      <div v-if="pageBlog" :value="pageBlog">
        <h1 class="text-g3">
          {{ pageBlog.title }}
        </h1>
      </div>
      <p>
        {{ pageBlog?.description }}
      </p>
    </UCard>
    <UCard>
      <div class="prose dark:prose-invert overflow-y-hidden prose-sm max-w-6xl mx-auto prose-permadi">
        <ContentRenderer v-if="pageBlog" :value="pageBlog" />
      </div>
    </UCard>
    <UCard>
      <DisqusComments :identifier="slug" />
    </UCard>
  </UContainer>
</template>

<style scoped>

</style>
