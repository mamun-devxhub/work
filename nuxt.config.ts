// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    head: {
      title: "Website Title",
      titleTemplate: "%s | Sub Title 1 | Sub Title 2",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "keywords", content: process.env.NUXT_PUBLIC_META_KEYWORDS },
        { property: "og:type", content: "website" },
      ],
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.ico",
        },
        {
          key: "canonical",
          rel: "canonical",
          href: process.env.NUXT_PUBLIC_SITE_URL,
        },
      ],
      style: [],
      script: [],
    },
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" },
  },

  runtimeConfig: {
    apiUrl: process.env.NUXT_PUBLIC_API_URL,
    apiSecret: process.env.NUXT_PUBLIC_API_SECRET,
    authSecret: process.env.NUXT_PUBLIC_AUTH_SECRET,

    google: {
      clientId: "client-id",
      clientSecret: "client-secret",
    },

    public: {
      appName: process.env.NUXT_PUBLIC_APP_NAME,
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL,
      cdnUrl: process.env.NUXT_PUBLIC_CDN_URL,
      apiUrl: process.env.NUXT_PUBLIC_API_URL,
      googleMapKey: process.env.NUXT_PUBLIC_GOOGLE_MAP_KEY,
      stripeKey: process.env.NUXT_PUBLIC_STRIPE_KEY,
      workflow: process.env.NUXT_PUBLIC_WORKFLOW,
    },
  },

  nitro: {
    storage: {
      redis: {
        driver: "redis",
        url: process.env.NUXT_PUBLIC_REDIS_URL,
      },
    },
    devStorage: {
      redis: {
        driver: "fs",
        base: "./data/db",
      },
    },
    routeRules: {
      "/server/**": {
        proxy: `${process.env.NUXT_PUBLIC_API_URL}/**`,
      },
    },
    devProxy: {
      "/server": {
        target: `${process.env.NUXT_PUBLIC_API_URL}`,
        changeOrigin: true,
      },
    },
  },

  // devServer: {
  //   https: {
  //     key: "./localhost-key.pem",
  //     cert: "./localhost.pem",
  //   },
  // },

  // googleFonts: {
  //   families: {
  //     Roboto: true,
  //   },
  // },

  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode", "nuxt-facebook-chat"],

  css: ["@/assets/css/main.css", "@/assets/css/tailwind.css"],

  tailwindcss: {
    viewer: true,
  },

  colorMode: {
    classSuffix: "",
  },
});
