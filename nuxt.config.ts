// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxtjs/seo'
  ],

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  site: {
    name: 'Coro Nueva Generación',
    description: 'Todos los enlaces del Coro Nueva Generación en un solo lugar.',
    url: 'https://choir-ng-lintr.vercel.app',
    defaultLocale: 'es'
  },

  colorMode: {
    preference: 'dark',
    fallback: 'dark'
  },

  routeRules: {
    '/': { prerender: true }
  },

  compatibilityDate: '2026-06-30',

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  icon: {
    clientBundle: {
      icons: [
        'simple-icons:instagram',
        'simple-icons:tiktok',
        'simple-icons:facebook',
        'simple-icons:whatsapp',
        'lucide:arrow-up-right'
      ]
    }
  }
})
