<script setup>
useHead({
  link: [{ rel: 'icon', href: '/favicon.ico' }]
})

useSeoMeta({
  title: 'Nueva Generación',
  description: 'Todos los enlaces del Coro Nueva Generación en un solo lugar.',
  twitterCard: 'summary'
})
</script>

<template>
  <UApp>
    <NuxtPage />
  </UApp>
</template>
