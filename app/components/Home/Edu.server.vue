<script lang="ts" setup>
interface EducationItem {
  label: string
  institution: string
  period: string
  icon: string
}

withDefaults(
  defineProps<{
    education?: EducationItem[]
  }>(),
  {
    education: () => [
      {
        label: 'SD',
        icon: 'hugeicons:mortarboard-02',
        institution: 'SDN TEJA I',
        period: '2000-2006',
      },
      {
        label: 'SMP',
        icon: 'hugeicons:mortarboard-02',
        institution: 'SMPN 1 RAJAGALUH',
        period: '2006-2009',
      },
      {
        label: 'SMA',
        icon: 'hugeicons:mortarboard-02',
        institution: 'SMAN 1 RAJAGALUH',
        period: '2009-2012',
      },
      {
        label: 'Universitas',
        icon: 'hugeicons:mortarboard-02',
        institution: 'UPI',
        period: '2012-2016',
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
          <!-- <div v-for="(education, index) in props.educationHistory" :key="index">
            <div class="mb-2 flex w-full items-center">
              <h2 class="mr-2 whitespace-nowrap">
                {{ education.level }}
              </h2>
              <USeparator color="primary" type="dotted" class="flex-grow" />
              <h2 class="ml-2 whitespace-nowrap">
                {{ education.institution }}
              </h2>
            </div>
          </div> -->
          <UAccordion :items="education">
            <template #body="{ item }">
              Saya lulus {{ item.label }} pada tahun {{ item.period }} di
              {{ item.institution }}.
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
