<script setup lang="ts">
import logo from '~/assets/img/logo.jpg'
import { choir, coordinators, links, socials, type LinkItem } from '~/data/links'

const year = new Date().getFullYear()

const linkBase = 'group flex items-center justify-between gap-3 rounded-xl border px-4 py-3.5 transition-colors'
const linkDefault = 'border-muted bg-elevated hover:border-accented hover:bg-accented'
const linkFeatured = 'border-primary/50 bg-primary/15 hover:bg-primary/25'

function cardClass(link: LinkItem) {
  return `${linkBase} ${link.featured ? linkFeatured : linkDefault}`
}
</script>

<template>
  <main class="mx-auto w-full max-w-lg px-6 py-12 sm:py-16">
    <header class="flex flex-col items-center text-center">
      <img
        :src="logo"
        :alt="choir.name"
        class="size-28 rounded-full object-cover shadow-lg ring-2 ring-secondary/60"
      >
      <h1 class="mt-5 text-2xl font-bold text-highlighted">
        {{ choir.name }}
      </h1>
      <p class="mt-1 text-sm text-muted">
        {{ choir.tagline }}
      </p>
    </header>

    <nav class="mt-8 flex flex-col gap-3">
      <a
        v-for="link in links"
        :key="link.label"
        :href="link.href"
        target="_blank"
        rel="noopener"
        :class="cardClass(link)"
      >
        <span class="flex items-center gap-3">
          <UIcon
            :name="link.icon"
            class="size-5 shrink-0"
            :class="link.featured ? 'text-primary' : 'text-secondary'"
          />
          <span class="font-medium text-default">{{ link.label }}</span>
        </span>
        <UIcon
          name="i-lucide-arrow-up-right"
          class="size-4 text-dimmed transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      </a>
    </nav>

    <UCollapsible class="mt-3">
      <template #default="{ open }">
        <button
          type="button"
          :class="`${linkBase} ${linkFeatured} w-full`"
          aria-label="Ver contactos de coordinación"
        >
          <span class="flex items-center gap-3 text-left">
            <UIcon name="i-simple-icons-whatsapp" class="size-5 shrink-0 text-primary" />
            <span>
              <span class="block font-medium text-default">Hablar con coordinación</span>
              <span class="block text-xs text-muted">Elige a uno de los 2 coordinadores</span>
            </span>
          </span>
          <UIcon
            name="i-lucide-chevron-down"
            class="size-5 shrink-0 text-primary transition-transform"
            :class="open ? 'rotate-180' : ''"
          />
        </button>
      </template>

      <template #content>
        <div class="mt-2 space-y-2 rounded-xl border border-muted bg-elevated p-2">
          <a
            v-for="coordinator in coordinators"
            :key="coordinator.label"
            :href="coordinator.href"
            target="_blank"
            rel="noopener"
            class="group flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 hover:bg-accented"
          >
            <span class="flex items-center gap-3">
              <UIcon :name="coordinator.icon" class="size-5 text-primary" />
              <span>
                <span class="block text-sm font-medium text-default">{{ coordinator.label }}</span>
                <span class="block text-xs text-muted">Coordinación del grupo parroquial</span>
              </span>
            </span>
            <UIcon
              name="i-lucide-arrow-up-right"
              class="size-4 text-dimmed transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>
      </template>
    </UCollapsible>

    <div class="mt-8 flex items-center justify-center gap-4">
      <UButton
        v-for="social in socials"
        :key="social.label"
        :to="social.href"
        target="_blank"
        :icon="social.icon"
        :aria-label="social.label"
        color="neutral"
        variant="ghost"
        size="lg"
        square
      />
    </div>

    <footer class="mt-10 text-center text-xs text-dimmed">
      © {{ year }} {{ choir.name }}
    </footer>
  </main>
</template>
