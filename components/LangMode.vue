<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale, setLocale } = useI18n()

const currentLocale = computed({
  get() {
    return locale.value
  },
  set(value: string) {
    setLocale(value)
  },
})

const isEnglish = computed({
  get() {
    return currentLocale.value === 'en'
  },
  set() {
    currentLocale.value = currentLocale.value === 'en' ? 'id' : 'en'
  },
})

const tooltipText = computed(() => (isEnglish.value ? 'English' : 'Indonesia'))
</script>

<template>
  <ClientOnly>
    <UTooltip :text="tooltipText">
      <UButton
        :icon="isEnglish ? 'i-circle-flags-gb-eng' : 'i-circle-flags-id'"
        color="primary"
        variant="ghost"
        aria-label="Language"
        @click="isEnglish = !isEnglish"
      />
    </UTooltip>
    <template #fallback>
      <div class="size-8" />
    </template>
  </ClientOnly>
</template>
