<script setup>
useHead({
  htmlAttrs: { lang: 'es' },
  link: [
    { rel: 'icon', type: 'image/png', href: '/favicon.png?v=1' },
    { rel: 'apple-touch-icon', href: '/favicon.png?v=1' }
  ]
})

useSeoMeta({
  title: 'Nueva Generación | Coro Parroquial',
  description: 'Todos los enlaces del Coro Nueva Generación en un solo lugar.',
  ogTitle: 'Nueva Generación | Coro Parroquial',
  ogDescription: 'Todos los enlaces del Coro Nueva Generación en un solo lugar.',
  ogImage: 'https://choir-ng-lintr.vercel.app/logo-ng.jpg',
  ogImageAlt: 'Logo del Coro Nueva Generación',
  ogUrl: 'https://choir-ng-lintr.vercel.app',
  ogSiteName: 'Coro Nueva Generación',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Nueva Generación | Coro Parroquial',
  twitterDescription: 'Todos los enlaces del Coro Nueva Generación en un solo lugar.',
  twitterImage: 'https://choir-ng-lintr.vercel.app/logo-ng.jpg',
  twitterImageAlt: 'Logo del Coro Nueva Generación'
})
</script>

<template>
  <UApp>
    <NuxtPage />
  </UApp>
</template>
