// composables/useNavigation.ts

export function useNavigation() {
  const { t } = useI18n()

  const navigation = [
    {
      name: t('navigation.home'),
      to: '/',
      icon: 'i-ph-house-duotone',
    },
    {
      name: t('navigation.blog'),
      to: '/articles',
      icon: 'i-ph-notebook-duotone',
    },
    {
      name: t('navigation.gallery'),
      to: '/gallery',
      icon: 'i-ph-images-duotone',
    },
    {
      name: t('navigation.project'),
      to: '/projects',
      icon: 'i-ph-folders-duotone',
    },
  ]

  return { navigation }
}
