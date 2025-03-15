<script setup lang="ts">
import type { Collections } from '@nuxt/content'

const localePath = useLocalePath()
const { setLocale, locales, locale } = useI18n()

// Koleksi dinamis berdasarkan bahasa
const collection = computed(() => `pages_${locale.value}` as keyof Collections)

// Query navigasi dengan watch
const { data: navigations } = await useAsyncData(
  'navigation',
  async () => {
    return queryCollectionNavigation(collection.value)
  },
  {
    watch: [locale], // Re-run query jika locale berubah
  },
)

// Error handling jika navigasi tidak ditemukan
if (!navigations.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Navigation not found',
    fatal: true,
  })
}
</script>

<template>
  <nav>
    <UButtonGroup>
      <UButton
        v-for="_locale of locales"
        :key="_locale.code"
        :label="`${_locale.name} (${_locale.code})`"
        color="neutral"
        :variant="_locale.code === locale ? 'solid' : 'outline'"
        class="px-4"
        @click="setLocale(_locale.code)"
      />
    </UButtonGroup>
    <LangToogle />
    <UiColorModeButton />
    <ClientOnly>
      <ul v-if="navigations">
        <li v-for="item in navigations" :key="item.path">
          <NuxtLink :to="localePath(item.path)">
            {{ item.title }}
          </NuxtLink>
        </li>
      </ul>
    </ClientOnly>
  </nav>
</template>
