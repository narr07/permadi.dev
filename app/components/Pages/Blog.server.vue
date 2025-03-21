// app/components/Pages/Blog.vue
<script setup lang="ts">
import type { Collections } from '@nuxt/content'

const route = useRoute()
const router = useRouter()
const { locale, t } = useI18n()

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

const { data: listBlog } = await useAsyncData(
  `listBlog-${locale.value}`,
  async () => {
    return (await queryCollection(`blog_${locale.value}`)
      .select('title', 'description', 'path', 'date', 'tags', 'id_slug', 'en_slug', 'body')
      .order('date', 'DESC')
      .all()) as Collections['blog_id'][] | Collections['blog_en'][]
  },
  {
    watch: [locale, currentPage],
  },
)

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
function getSlug(post: Collections['blog_id'] | Collections['blog_en']) {
  return locale.value === 'en' ? post.en_slug : post.id_slug
}
</script>

<template>
  <div>
    <UContainer>
      <!-- Title -->
      <div class="pb-4 pt-8">
        <h1 class="text-g3 md:text-g4 font-bold">
          {{ t("blog.title") }}
        </h1>
      </div>

      <!-- Tags -->
      <!-- <div class="py-4">
        <Tags />
      </div> -->

      <!-- Article List -->
      <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div v-for="post in postsWithFormattedDate" :key="post.path">
          <NuxtLink
            :aria-label="`${t('article.read')} ${post.title}`"
            :title="`${t('article.read')} ${post.title}`"
            :to="localePath(`/artikel/${getSlug(post)}`)"
          >
            <UCard
              class="dark:hover:bg-permadi-700 h-full duration-100 ease-in-out hover:bg-yellow-500"
            >
              <div class="flex h-full flex-col justify-between p-2">
                <!-- Article Title -->
                <h2
                  class="text-g2 text-permadi-700 line-clamp-2 text-balance font-semibold"
                >
                  {{ post.title }}
                </h2>

                <!-- Separator -->
                <div class="pt-2">
                  <USeparator color="primary" />
                </div>

                <!-- Reading Time -->
                <div class="pt-2">
                  <p class="flex items-center gap-1 text-xs">
                    <UIcon name="ph:timer-duotone" class="h-4 w-4" />
                    {{ formatReadingTime(post.readingTime) }}
                  </p>
                </div>

                <!-- Date and Tag -->
                <div class="flex h-full items-end justify-between">
                  <p class="flex items-center gap-1 text-xs">
                    <UIcon name="ph:calendar-dots-duotone" class="h-4 w-4" />
                    {{ formatDate(post.date, locale) }}
                  </p>
                  <div v-if="post.tags && post.tags.length > 0" class="mr-2">
                    <!-- <UButton
                      :to="localePath(`/blog/tags/${post.tags[0]}`)"
                      color="neutral"
                      :aria-label="`Lihat artikel dengan tag ${post.tags[0]}`"
                      size="xs"
                    >
                      <p class="text-xs">
                        {{ post.tags[0] }}
                      </p>
                    </UButton> -->
                  </div>
                </div>
              </div>
            </UCard>
          </NuxtLink>
        </div>
      </div>

      <!-- Pagination -->
      <div class="mt-8 flex justify-center">
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
