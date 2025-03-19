<script setup lang="ts">
const { setLocale, locales, locale } = useI18n()

const items = locales.value.map(_locale => ({
  label: _locale.code,
  id: _locale.code,
  icon:
  _locale.code === 'id' ? 'openmoji:flag-england' : 'openmoji:flag-indonesia',
}))

const value = ref(locale.value)

watch(value, (newLocale) => {
  setLocale(newLocale)
})

const icon = computed(
  () => items.find(item => item.id === value.value)?.icon,
)
</script>

<template>
  <SwitchLocalePathLink :locale="value">
    <UButton
      class="bg-white ring-2 text-yellow-500 ring-permadi-950  dark:bg-permadi-700 dark:ring-permadi-600"
      square
      :icon="icon"
      size="md"
      @click="value = value === 'en' ? 'id' : 'en'"
    >
      <span class="sr-only">
        {{ value === "en" ? "English" : "Indonesia" }}
      </span>
    </UButton>
  </SwitchLocalePathLink>
</template>
