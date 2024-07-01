export default defineAppConfig({
  socials: {
    github: 'https://github.com/HugoRCD',
    facebook: 'https://www.facebook.com/hugo.rcd',
    twitter: 'https://twitter.com/HugoRCD__',
    linkedin: 'https://www.linkedin.com/in/hugo-richard-0801',
    instagram: 'https://www.instagram.com/hugo.rcd_',
    behance: 'https://www.instagram.com/hugo.rcd_',

  },
  ui: {
    primary: 'brand',
    gray: 'brand',

    container: {
      padding: 'px-2 sm:px-10 lg:px-16 ',
      constrained: 'max-w-7xl',
    },
    button: {
      rounded: 'rounded',
      default: {
        size: 'sm',
        variant: 'solid',
        color: 'primary',
        loadingIcon: 'i-heroicons-arrow-path-20-solid',
      },

    },
    card: {
      base: 'overflow-hidden ',
      background: 'bg-gray-100 dark:bg-gray-900',
      divide: 'divide-y divide-gray-200 dark:divide-gray-800',
      ring: 'ring-1 ring-gray-800 dark:ring-gray-800',
      rounded: 'rounded',
      shadow: 'shadow',
      body: {
        base: '',
        background: '',
        padding: 'px-2 py-3 sm:p-4',
      },
      header: {
        base: '',
        background: '',
        padding: 'px-4 py-5 sm:px-4',
      },
      footer: {
        base: '',
        background: '',
        padding: 'px-4 py-4 sm:px-4',
      },
    },
    accordion: {
      wrapper: 'w-full flex flex-col space-y-2',
      item: {
        base: '',
        size: 'text-sm',
        color: 'text-gray-700 dark:text-gray-500',
        padding: 'pt-1.5 pb-3 px-2',
        icon: 'ms-auto transform transition-transform duration-200',
      },
      transition: {
        enterActiveClass:
        'overflow-hidden transition-[height] duration-200 ease-out',
        leaveActiveClass:
        'overflow-hidden transition-[height] duration-200 ease-out',
      },
      default: {
        openIcon: 'i-ph-caret-down-duotone',
        closeIcon: '',
        class:
        'mb-2 text-brand-800 w-full transition  hover:bg-yellow dark:text-gray-500 dark:hover:bg-gray-800 bg-brand-100 dark:bg-gray-900 rounded  ring-1 ring-brand-800   drop-shadow-1 dark:drop-shadow-1gelap       dark:hover:ring-brand-500',
        variant: 'soft',
      },
    },
    badge: {
      base: 'inline-flex items-center ring-1 bg-brand-800 ring-brand-600',
      rounded: 'rounded',
      font: 'font-medium',
      size: {
        xxs: 'text-[11px] px-1 py-0.5',
        xs: 'text-xs px-1.5 py-0.5',
        sm: 'text-xs px-2 py-1 ',
        md: 'text-sm px-2 py-1',
        lg: 'text-sm px-2.5 py-1.5',
      },
      color: {
        white: {
          solid: 'ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-900 dark:text-white bg-white dark:bg-gray-900',
        },
        gray: {
          solid: 'ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-gray-800',
        },
        black: {
          solid: 'text-white dark:text-gray-900 bg-brand-600  dark:bg-brand-200',
        },
      },
      default: {
        size: 'sm',
        variant: 'solid',
        color: 'primary',
      },
    },
    dropdown: {
      wrapper: 'relative inline-flex text-left rtl:text-right',
      container: 'z-20 group',
      width: 'w-48',
      height: '',
      background: 'bg-gray-200 dark:bg-gray-800',
      shadow: 'shadow-lg',
      rounded: 'rounded',
      ring: 'ring-1 ring-gray-800 dark:ring-gray-700',
      base: 'relative focus:outline-none overflow-y-auto scroll-py-1 drop-shadow-2 dark:drop-shadow-2gelap',
      divide: 'divide-y divide-gray-200 dark:divide-gray-700',
      padding: 'p-1',
      item: {
        base: 'group flex items-center gap-2 w-full',
        rounded: 'rounded',
        padding: 'px-2 py-1.5',
        size: 'text-sm',
        active:
        'bg-yellow ring-1 ring-brand-800 dark:bg-yellow text-gray-900 dark:text-brand-800 dark:ring-brand-800 ',
        inactive: 'text-gray-700 dark:text-gray-200',
        disabled: 'cursor-not-allowed opacity-50',
        icon: {
          base: 'flex-shrink-0 h-4 w-4',
          active: 'text-gray-800 dark:text-brand-800',
          inactive: 'text-gray-700 dark:text-gray-500',
        },
      },
    },
    tabs: {
      wrapper: 'relative space-y-2',
      container: 'relative w-full  ',
      base: 'focus:outline-none',
      list: {
        base: 'relative ring-1 dark:ring-brand-800  ring-brand-800',
        background: 'bg-gray-100 dark:bg-gray-900',
        rounded: 'rounded',
        shadow: '',
        padding: 'p-1',
        height: 'h-10',
        width: 'w-full',
        marker: {
          wrapper:
          'absolute top-[4px] left-[4px] duration-200 ease-out focus:outline-none',
          base: 'w-full h-full',
          background: 'bg-yellow ring-1 ring-brand-800 dark:bg-brand-800',
          rounded: 'rounded',
          shadow: 'shadow-sm',
        },
        tab: {
          base: ' relative inline-flex items-center justify-center flex-shrink-0 w-full ui-focus-visible:outline-0 ui-focus-visible:ring-2 ui-focus-visible:ring-primary-500 dark:ui-focus-visible:ring-primary-400 ui-not-focus-visible:outline-none focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 transition-colors duration-200 ease-out',
          background: '',
          active: 'text-gray-900 dark:text-yellow  transition',
          inactive: 'text-gray-800 dark:text-gray-500',
          height: 'h-8',
          padding: 'px-3',
          size: 'text-sm',
          font: 'font-medium',
          rounded: 'rounded',
          shadow: '',
        },
      },
    },
  },

})
