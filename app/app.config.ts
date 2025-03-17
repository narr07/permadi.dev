// app/app.config.ts
export default defineAppConfig({
  ui: {
    colors: {
      primary: "permadi",
      neutral: "permadi",
    },
    container: {
      base: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 my-4",
    },
    card: {
      slots: {
        root: "rounded",
        header: "p-4 sm:px-6",
        body: "p-4 sm:p-6",
        footer: "p-4 sm:px-6",
      },
      variants: {
        variant: {
          solid: {
            root: "bg-(--ui-bg-inverted) text-(--ui-bg)",
          },
          outline: {
            root: "bg-primary-50 dark:bg-primary-800 ring-2 ring-permadi-700 divide-y divide-permadi-700",
          },
          soft: {
            root: "bg-(--ui-bg-elevated)/50 divide-y divide-(--ui-border)",
          },
          subtle: {
            root: "bg-(--ui-bg-elevated)/50 ring ring-(--ui-border) divide-y divide-(--ui-border)",
          },
        },
      },
      defaultVariants: {
        variant: "outline",
      },
    },
  },
});
