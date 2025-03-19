<script setup lang="ts">
const { setLocaleCookie, locales, locale } = useI18n();

const items = locales.value.map((_locale) => ({
  label: _locale.code,
  id: _locale.code,
  icon:
    _locale.code === "id" ? "openmoji:flag-england" : "openmoji:flag-indonesia",
}));

const value = ref(locale.value);

watch(value, (newLocale) => {
  setLocaleCookie(newLocale);
});

const icon = computed(
  () => items.find((item) => item.id === value.value)?.icon,
);
</script>

<template>
  <SwitchLocalePathLink :locale="value">
    <UButton
      class="bg-permadi-100 ring-2 ring-permadi-950 text-permadi-900 dark:text-permadi-50 dark:bg-permadi-800 dark:ring-permadi-700"
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
