<script lang="ts" setup>
interface EducationItem {
  level: string
  institution: string
  period: string
}

interface ArticleItem {
  title: string
  subtitle?: string
  content: string
  link?: string
}

const props = withDefaults(
  defineProps<{
    educationHistory?: EducationItem[]
    articleItems?: ArticleItem[]
  }>(),
  {
    educationHistory: () => [
      {
        level: 'SD',
        institution: 'SDN TEJA I',
        period: '2000-2006',
      },
      {
        level: 'SMP',
        institution: 'SMPN 1 RAJAGALUH',
        period: '2006-2009',
      },
      {
        level: 'SMA',
        institution: 'SMAN 1 RAJAGALUH',
        period: '2009-2012',
      },
      {
        level: 'Universitas',
        institution: 'UNIVERSITAS KUNINGAN',
        period: '2012-2016',
      },
    ],
    articleItems: () => [
      {
        title: 'Artikel 1',
        subtitle: 'Pendidikan',
        content: 'Ini adalah konten artikel tentang pendidikan di Indonesia.',
      },
      {
        title: 'Artikel 2',
        subtitle: 'Teknologi',
        content: 'Inovasi teknologi dalam pembelajaran jarak jauh.',
      },
      {
        title: 'Artikel 3',
        subtitle: 'Kurikulum',
        content: 'Perkembangan kurikulum pendidikan nasional.',
      },
      {
        title: 'Artikel 4',
        subtitle: 'Pembelajaran',
        content: 'Metode pembelajaran efektif untuk siswa.',
      },
      {
        title: 'Artikel 5',
        subtitle: 'Prestasi',
        content: 'Prestasi siswa dalam kompetisi nasional.',
      },
    ],
  },
)
</script>

<template>
  <UContainer>
    <div
      class="grid grid-cols-1 items-start justify-center gap-8 md:grid-cols-2"
    >
      <div
        class="top-24 flex w-full flex-col items-center justify-center space-y-4 md:sticky"
      >
        <UCard class="w-full">
          <LazySvgGuru hydrate-on-visible />
        </UCard>
        <UCard class="flex w-full flex-col space-y-2">
          <div
            v-for="(education, index) in props.educationHistory"
            :key="index"
          >
            <div class="mb-2 flex w-full items-center">
              <h2 class="mr-2 whitespace-nowrap">
                {{ education.level }}
              </h2>
              <USeparator color="primary" type="dotted" class="flex-grow" />
              <h2 class="ml-2 whitespace-nowrap">
                {{ education.institution }}
                <span> ({{ education.period }}) </span>
              </h2>
            </div>
          </div>
        </UCard>
      </div>
      <div class="flex w-full flex-col items-center justify-center space-y-4">
        <UCard class="w-full">
          <h2 class="mb-2 text-xl font-bold">
            Artikel terbaru dengan kategori pendidikan
          </h2>
        </UCard>

        <UCard
          v-for="(article, index) in props.articleItems"
          :key="index"
          class="w-full"
        >
          <div class="space-y-2">
            <div v-if="article.subtitle" class="text-sm text-gray-500">
              <slot :name="`article-subtitle-${index}`">
                {{ article.subtitle }}
              </slot>
            </div>
            <h3 class="text-lg font-semibold">
              <slot :name="`article-title-${index}`">
                {{ article.title }}
              </slot>
            </h3>
            <p class="text-gray-700 dark:text-gray-300">
              <slot :name="`article-content-${index}`">
                {{ article.content }}
              </slot>
            </p>
            <UButton
              v-if="article.link"
              size="sm"
              color="primary"
              variant="ghost"
              :to="article.link"
            >
              <slot :name="`article-action-${index}`">
                Baca Selengkapnya
              </slot>
            </UButton>
          </div>
        </UCard>
      </div>
    </div>
  </UContainer>
</template>
