<script setup lang="ts">
// Import or define the 'Title' type here
type Title = string

const route = useRoute()
const { data: page } = await useAsyncData(`${route.path}`, () => queryContent(route.path).findOne())

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found' })
}

const { t } = useI18n()

useSeoMeta({
  title: () => (page.value ? page.value.title as Title : t('page.title') as Title),
  description: () => (page.value ? page.value.description : t('page.description')),
  author: 'Dinar Permadi',
})
</script>

<template>
  <div>
    <Html :lang="$i18n.locale">
      <Body>
        <LayoutNavBar />
        <NuxtLayout>
          <ContentQuery v-slot="{ data }" :path="$route.path" find="one">
            <ContentRenderer :value="data" />
          </ContentQuery>
        </NuxtLayout>
      </Body>
    </Html>
  </div>
</template>
