<script lang="ts" setup>
import type { Collections } from '@nuxt/content'
import { withLeadingSlash } from 'ufo'

const { locale } = useI18n()

// Ensure pageBlog is typed correctly

const route = useRoute()
const slug = computed(() => withLeadingSlash(String(route.params.slug)))

// Ambil data artikel saat ini
const { data: pageBlog } = await useAsyncData(
  `blogPage-${locale.value}-${route}`,
  async () => {
    const collection = `blog_${locale.value}` as keyof Collections
    const content = await queryCollection(collection).first()
    if (!content)
      throw new Error('Content not found')
    return content
  },
  {
    watch: [locale, slug], // Pastikan slug juga dipantau
  },
)

useSeoMeta({
  title: pageBlog.value?.title,
  description: pageBlog.value?.description,
  ogTitle: pageBlog.value?.title,
  ogDescription: pageBlog.value?.description,
  keywords: 'dinar, permadi, dinar permadi, guru, developer, programmer',
  author: 'Dinar Permadi Yusup',
  articleAuthor: ['Dinar Permadi Yusup'],
  articleSection: () => pageBlog.value?.title,
  articleTag: () => [
    'dinar',
    'permadi',
    'dinar permadi',
    'guru',
    'developer',
    'programmer',
  ],
  ogType: 'article',
  twitterTitle: () => pageBlog.value?.title,
  twitterDescription: () => pageBlog.value?.description,
  twitterData1: 'Dinar Permadi Yusup',
  twitterLabel1: 'Author',
  // twitterData2: () => formatReadingTime(calculateReadingTime(pageBlog.value?.body)),
  twitterLabel2: 'Read Time',
})
const setI18nParams = useSetI18nParams()
setI18nParams({
  en: { slug: pageBlog.value?.slugs },
  id: { slug: pageBlog.value?.slugs },
})
</script>

<template>
  <UContainer>
    {{ slug }}
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
      <div
        class="prose dark:prose-invert prose-sm prose-permadi mx-auto max-w-6xl overflow-y-hidden"
      >
        <ContentRenderer v-if="pageBlog" :value="pageBlog" />
      </div>
    </UCard>
    <!-- <UCard>
      <DisqusComments :identifier="pageBlog?.path" />
    </UCard> -->
  </UContainer>
</template>
