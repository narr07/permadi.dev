<script setup lang="ts">
import SvgDesigner from './SvgDesigner.vue'
import SvgGuru from './SvgGuru.vue'
import SvgProgrammer from './SvgProgrammer.vue'

defineProps({
  title: {
    type: String,
    default: 'Halo, Saya Dinar Permadi Yusup',
  },
  description: {
    type: String,
    default: 'Saya adalah seorang guru SD, Desainer Grafis dan Developer. Selamat datang di situs saya!',
  },

})
const { t } = useI18n()
const items = [
  SvgGuru,
  SvgProgrammer,
  SvgDesigner,
]

const carouselRef = ref()

onMounted(() => {
  setInterval(() => {
    if (!carouselRef.value)
      return

    if (carouselRef.value.page === carouselRef.value.pages) {
      return carouselRef.value.select(0)
    }

    carouselRef.value.next()
  }, 3000)
})
</script>

<template>
  <div>
    <UContainer class="grid grid-cols-1  items-center justify-center gap-4 py-20 md:grid-cols-2">
      <UCard class="flex h-full items-center   ">
        <h1 class="mb-4">
          {{ title }}
        </h1>
        <p>
          {{ description }}
        </p>
        <div class="flex w-full justify-end md:justify-start">
          <UButton
            to="/about"
            class="mt-4"
            color="gray"
            :label="t('cta')"
            icon="i-ph-user-duotone"
          />
        </div>
      </UCard>
      <UCard class="h-full items-center justify-center">
        <UCarousel
          ref="carouselRef"
          v-slot="{ item }"
          :items="items"
          :ui="{
            item: 'basis-full',

          }"
          class="mx-auto overflow-hidden rounded-lg"
        >
          <component
            :is="item"
            class="mx-auto justify-center"
          />
        </UCarousel>
      </UCard>
    </UContainer>
  </div>
<!-- End Hero -->
</template>
