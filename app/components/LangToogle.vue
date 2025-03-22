// app/components/LangToogle.vue
<script setup lang="ts">
const { setLocale, locales, locale } = useI18n()

const switchLocalePath = useSwitchLocalePath()

const items = locales.value.map(_locale => ({
  label: _locale.code,
  id: _locale.code,
  icon:
    _locale.code === 'id' ? 'openmoji:flag-england' : 'openmoji:flag-indonesia',
}))

const value = ref(locale.value)

watch(value, (newLocale) => {
  setLocale(newLocale)
  switchLocalePath(newLocale)
})

const icon = computed(() => items.find(item => item.id === value.value)?.icon)
</script>

<template>
  <SwitchLocalePathLink :locale="value">
    <ClientOnly>
      <UTooltip
        :text="value === 'en' ? 'Ubah ke Inggris' : 'Change to Indonesia'"
      >
        <UButton
          class="bg-permadi-100 ring-permadi-950 dark:bg-permadi-800 dark:ring-permadi-700 text-yellow-500 ring-2"
          square
          :icon="icon"
          size="md"
          @click="value = value === 'en' ? 'id' : 'en'"
        >
          <span class="sr-only">
            {{ value === "en" ? "English" : "Indonesia" }}
          </span>
        </UButton>
      </UTooltip>
    </ClientOnly>
  </SwitchLocalePathLink>
</template>
