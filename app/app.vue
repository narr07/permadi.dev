<script setup lang="ts">
import * as locales from '@nuxt/ui/locale'

const { locale } = useI18n()

const { finalizePendingLocaleChange } = useI18n()

// eslint-disable-next-line antfu/top-level-function
const onBeforeEnter = async () => {
  await finalizePendingLocaleChange()
}
</script>

<template>
  <div>
    <UApp :locale="locales[locale]">
      <NuxtRouteAnnouncer />
      <UiNav />
      <div class="pt-20">
        <NuxtPage
          :transition="{
            name: 'page',
            mode: 'out-in',
            onBeforeEnter,
          }"
        />
      </div>
      <UiFooter />
    </UApp>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
