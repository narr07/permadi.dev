// app/components/Pages/Blog.vue
<script setup lang="ts">
import type { Collections } from '@nuxt/content'
import { withLeadingSlash } from 'ufo'

const route = useRoute()
const router = useRouter()
const { locale, t } = useI18n()
const slug = computed(() => withLeadingSlash(String(route.params.slug)))
const localePath = useLocalePath()
const { calculateReadingTime, formatReadingTime } = useReadingTime()

// Pagination state
const itemsPerPage = 10
const currentPage = ref(Number(route.query.page) || 1)

// Update query parameter when currentPage changes
watch(currentPage, (newPage) => {
  router.replace({
    query: {
      ...route.query,
      page: newPage.toString(),
    },
  })
})

const { data: listBlog } = await useAsyncData(`articles-${locale.value}${slug.value}`, async () => {
  const collection = (`blog_${locale.value}`) as keyof Collections
  return await queryCollection(collection)
    .select('title', 'description', 'path', 'date', 'tags', 'body')
    .order('date', 'DESC')
    .all() as Collections['blog_id'][] | Collections['blog_en'][]
}, {
  watch: [locale],
})

if (!listBlog.value)
  throw createError({ statusCode: 404, statusMessage: 'Page not found' })

// Total items for pagination
const totalItems = computed(() => listBlog.value?.length ?? 0)

// Paginated blogs
const paginatedBlogs = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return listBlog.value?.slice(start, end) ?? []
})

// Format date and add reading time
const postsWithFormattedDate = computed(() =>
  paginatedBlogs.value.map(post => ({
    ...post,
    date: new Date(post.date), // Convert date to Date object
    readingTime: calculateReadingTime(post.body),
  })),
)

const seoMeta = computed(() => ({
  title: 'Blog',
  description: () => t('website.description'),
  keywords: 'dinar, permadi, dinar permadi, guru, developer, programmer',
}))

useSeoMeta({
  title: seoMeta.value.title,
  description: seoMeta.value.description,
  keywords: seoMeta.value.keywords,
  twitterTitle: seoMeta.value.title,
  twitterDescription: seoMeta.value.description,
})

// defineOgImageComponent('Page', {
//   title: t('website.blog'),
//   description: t('website.description'),
// })
</script>

<template>
  <div>
    <UContainer>
      <!-- Title -->
      <div class="pt-8 pb-4">
        <h1 class="font-bold text-g3 md:text-g4">
          {{ t('blog.title') }}
        </h1>
      </div>

      <!-- Tags -->
      <!-- <div class="py-4">
        <Tags />
      </div> -->

      <!-- Article List -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        <div v-for="post in postsWithFormattedDate" :key="post.id">
          <NuxtLink
            :aria-label="`${t('article.read')} ${post.title}`"
            :title="`${t('article.read')} ${post.title}`"
            :to="localePath(`/article${post.path}`)"
          >
            <UCard class="h-full hover:bg-yellow-500 duration-100 ease-in-out dark:hover:bg-permadi-700">
              <div class="flex flex-col p-2 h-full justify-between">
                <!-- Article Title -->
                <h2 class="text-g2 line-clamp-2 text-permadi-700 text-balance font-semibold">
                  {{ post.title }}
                </h2>

                <!-- Separator -->
                <div class="pt-2">
                  <USeparator color="primary" />
                </div>

                <!-- Reading Time -->
                <div class="pt-2">
                  <p class="text-xs flex items-center gap-1">
                    <UIcon name="ph:timer-duotone" class="w-4 h-4" />
                    {{ formatReadingTime(post.readingTime) }}
                  </p>
                </div>

                <!-- Date and Tag -->
                <div class="flex items-end justify-between h-full">
                  <p class="text-xs flex items-center gap-1">
                    <UIcon name="ph:calendar-dots-duotone" class="w-4 h-4" />
                    {{ formatDate(post.date, locale) }}
                  </p>
                  <div v-if="post.tags && post.tags.length > 0" class="mr-2">
                    <UButton
                      :to="localePath(`/blog/tags/${post.tags[0]}`)"
                      color="neutral"
                      :aria-label="`Lihat artikel dengan tag ${post.tags[0]}`"
                      size="xs"
                    >
                      <p class="text-xs">
                        {{ post.tags[0] }}
                      </p>
                    </UButton>
                  </div>
                </div>
              </div>
            </UCard>
          </NuxtLink>
        </div>
      </div>

      <!-- Pagination -->
      <div class="flex justify-center mt-8">
        <UPagination
          v-model:page="currentPage"
          :items-per-page="itemsPerPage"
          active-color="neutral"
          :sibling-count="1"
          :total="totalItems"
        />
      </div>
    </UContainer>
  </div>
</template>
