export interface LinkItem {
  label: string
  href: string
  icon: string
  featured?: boolean
}

export interface SocialItem {
  label: string
  href: string
  icon: string
}

export const choir = {
  name: 'Nueva Generación',
  tagline: 'Coro · Alabanza y adoración'
}

export const aura = {
  label: 'Descubre tu Aura NG',
  description: 'Dinámica especial de la jornada',
  href: 'https://choir-ng-aura.vercel.app/'
}

export const event = {
  name: 'San Pedro Fest',
  startsAt: '2026-08-30T14:00:00-05:00'
}

export const links: LinkItem[] = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/cpng_lurin/',
    icon: 'i-simple-icons-instagram'
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@ngcoroparroquial?_r=1&_t=ZS-99I1XnFXTXQ',
    icon: 'i-simple-icons-tiktok'
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/cpng.lurin',
    icon: 'i-simple-icons-facebook'
  }
]

export const coordinators: LinkItem[] = [
  {
    label: 'Roberto Raúl Jr.',
    href: 'https://wa.me/51934165166',
    icon: 'i-simple-icons-whatsapp'
  },
  {
    label: 'Katherine Panduro Rivero',
    href: 'https://wa.me/51932674591',
    icon: 'i-simple-icons-whatsapp'
  }
]

export const socials: SocialItem[] = links.map(({ label, href, icon }) => ({
  label,
  href,
  icon
}))
