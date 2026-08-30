<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import logo from '~/assets/img/logo.jpg'
import { aura, choir, coordinators, event, links, socials, type LinkItem } from '~/data/links'

const year = new Date().getFullYear()
const now = ref(0)
const eventTime = new Date(event.startsAt).getTime()
let countdownTimer: ReturnType<typeof setInterval> | undefined

const linkBase = 'group flex items-center justify-between gap-3 rounded-xl border px-4 py-3.5 transition-colors'
const linkDefault = 'border-muted bg-elevated hover:border-accented hover:bg-accented'
const linkFeatured = 'border-primary/50 bg-primary/15 hover:bg-primary/25'

const countdownReady = computed(() => now.value > 0)
const eventStarted = computed(() => now.value >= eventTime)
const countdown = computed(() => {
  const difference = Math.max(eventTime - now.value, 0)

  return [
    { label: 'días', value: Math.floor(difference / 86_400_000) },
    { label: 'horas', value: Math.floor((difference / 3_600_000) % 24) },
    { label: 'min', value: Math.floor((difference / 60_000) % 60) }
  ]
})

function cardClass(link: LinkItem) {
  return `${linkBase} ${link.featured ? linkFeatured : linkDefault}`
}

onMounted(() => {
  const updateCountdown = () => {
    now.value = Date.now()
  }

  updateCountdown()
  countdownTimer = setInterval(updateCountdown, 60_000)
})

onBeforeUnmount(() => {
  if (countdownTimer) clearInterval(countdownTimer)
})
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

    <section class="mt-8 rounded-xl border border-primary/40 bg-primary/10 p-4 text-center">
      <p class="text-xs font-semibold tracking-widest text-primary">ENCUENTRO JUVENIL</p>
      <h2 class="mt-1 text-xl font-bold text-highlighted">{{ event.name }} 🎊</h2>
      <p class="mt-1 text-sm text-muted">
        ¡Ya falta poco para encontrarnos, celebrar la fe y disfrutar como comunidad!
      </p>

      <div v-if="countdownReady && !eventStarted" class="mt-4" aria-live="polite">
        <p class="text-xs font-medium text-toned">Faltan</p>
        <div class="mt-2 grid grid-cols-3 gap-2">
          <div v-for="unit in countdown" :key="unit.label" class="rounded-lg bg-elevated px-2 py-2">
            <span class="block text-lg font-bold text-highlighted">{{ unit.value }}</span>
            <span class="block text-xs text-muted">{{ unit.label }}</span>
          </div>
        </div>
        <p class="mt-3 text-xs text-muted">30 de agosto · 2:00 p. m.</p>
      </div>
      <p v-else-if="eventStarted" class="mt-4 font-medium text-primary">¡La jornada ya empezó! 🙌🏼</p>
      <p v-else class="mt-4 text-xs text-muted">30 de agosto · 2:00 p. m.</p>
    </section>

    <a
      :href="aura.href"
      target="_blank"
      rel="noopener"
      class="group mt-3 flex items-center justify-between gap-3 rounded-xl border border-secondary/50 bg-secondary/10 px-4 py-4 transition-colors hover:bg-secondary/15"
    >
      <span class="flex items-center gap-3">
        <span class="grid size-10 shrink-0 place-items-center rounded-full bg-secondary/15 text-secondary">
          <UIcon name="i-lucide-sparkles" class="size-5" />
        </span>
        <span>
          <span class="block font-semibold text-highlighted">{{ aura.label }}</span>
          <span class="block text-sm text-muted">{{ aura.description }} · Solo durante la jornada ✨</span>
        </span>
      </span>
      <UIcon
        name="i-lucide-arrow-up-right"
        class="size-5 shrink-0 text-secondary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      />
    </a>

    <nav class="mt-3 flex flex-col gap-3">
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
