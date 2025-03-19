<script lang="ts" setup>
withDefaults(
  defineProps<{
    education?: EducationItem[]
  }>(),
  {
    education: () => [
      {
        label: 'S1',
        icon: 'hugeicons:mortarboard-02',
        institution: 'UPI',
        period: '2015-2021',
        url: 'https://upi.edu/',
      },
    ],
  },
)
const { t } = useI18n()
interface EducationItem {
  label: string
  institution: string
  period: string
  icon: string
  url: string
}
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
          <h1>{{ t('global.edutitle') }}</h1>
          <h2 class="sr-only">
            {{ t('global.edutitle') }}
          </h2>
          <UAccordion :items="education">
            <template #content="{ item }">
              Saya lulusan <span>
                <NuxtLink target="_blank" :to="`${item.url}?ref=dinarpermadiyusup`" class="border-b hover:border-dashed border-dotted">
                  {{ item.institution }}
                </NuxtLink> </span>.   Pada tahun {{ item.period }}
            </template>
          </UAccordion>
        </UCard>
      </div>
      <div class="flex w-full flex-col items-center justify-center space-y-4">
        <UCard class="w-full">
          <h2 class="mb-2 text-xl font-bold">
            Artikel terbaru dengan kategori pendidikan
          </h2>
        </UCard>
      </div>
    </div>
  </UContainer>
</template>
