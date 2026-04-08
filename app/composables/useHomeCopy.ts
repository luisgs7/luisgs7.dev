import { parse as parseYaml } from 'yaml'
import homeMd from '../../content/home.md?raw'

/** Frontmatter YAML sem gray-matter (evita `Buffer` no bundle do cliente). */
function parseYamlFrontmatter(raw: string): { data: unknown } {
  const text = raw.replace(/^\uFEFF/, '')
  if (!text.startsWith('---')) return { data: {} }
  const afterOpen = text.indexOf('\n', 3)
  if (afterOpen === -1) return { data: {} }
  const fromContent = text.slice(afterOpen + 1)
  const closeIdx = fromContent.search(/^\s*---\s*$/m)
  if (closeIdx === -1) return { data: {} }
  const yamlBlock = fromContent.slice(0, closeIdx).trimEnd()
  try {
    return { data: parseYaml(yamlBlock) ?? {} }
  } catch {
    return { data: {} }
  }
}

const DEVICON_CDN = 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons'
const SOCIAL_ICONS_CDN = 'https://cdn.jsdelivr.net/npm/simple-icons@13.16.0/icons'

export type StatAccent = 'primary' | 'tertiary'

export interface HomeStat {
  value: string
  label: string
  accent: StatAccent
}

export interface HomeTechYaml {
  name: string
  slug: string
  djangoInvert?: boolean
}

export interface HomeBlogYaml {
  tag: string
  tagVariant: StatAccent
  title: string
  excerpt: string
  image: string
  imageAlt: string
}

export interface HomeBlogPost extends HomeBlogYaml {
  tagClass: string
  shadow: StatAccent
}

export interface HomeSocialYaml {
  label: string
  href: string
  icon: string
}

export interface HomeSocialLink extends HomeSocialYaml {
  iconSrc: string
}

export interface HomeTechItem {
  name: string
  img: string
  imgClass?: string
}

interface HomeFrontmatter {
  site: { title: string }
  a11y: {
    openMenu: string
    closeMenu: string
    closeMenuOverlay: string
    closeContactModal: string
    socialNav: string
  }
  contact?: { formEmail: string }
  nav: { home: string; blog: string; courses: string; contact: string }
  hero: {
    badge: string
    titleLine1: string
    titleGradient: string
    leadBefore: string
    leadNameBold: string
    leadAfter: string
    ctaPrimary: string
    ctaSecondary: string
    profileAlt: string
    profileImage: string
  }
  heroCode: { agents: string; uptime: string }
  authority: { titleBefore: string; titleAccent: string; body: string; tagline: string }
  stats: HomeStat[]
  techIntro: { title: string; subtitle: string }
  tech: HomeTechYaml[]
  blogIntro: { title: string; subtitle: string; archiveLink: string; readCaseStudy: string }
  blogPosts: HomeBlogYaml[]
  cta: { titleBefore: string; titleGradient: string; body: string; primary: string; secondary: string }
  footer: { brand: string; rightsName: string; rightsTagline: string }
  social: HomeSocialYaml[]
}

export interface HomeCopy {
  site: HomeFrontmatter['site']
  a11y: HomeFrontmatter['a11y']
  contact: { formEmail: string }
  nav: HomeFrontmatter['nav']
  hero: HomeFrontmatter['hero']
  heroCode: HomeFrontmatter['heroCode']
  authority: HomeFrontmatter['authority']
  stats: HomeStat[]
  techIntro: HomeFrontmatter['techIntro']
  techStack: HomeTechItem[]
  blogIntro: HomeFrontmatter['blogIntro']
  blogPosts: HomeBlogPost[]
  cta: HomeFrontmatter['cta']
  footer: HomeFrontmatter['footer']
  socialLinks: HomeSocialLink[]
}

function buildTechStack(rows: HomeTechYaml[]): HomeTechItem[] {
  return rows.map((row) => ({
    name: row.name,
    img: `${DEVICON_CDN}/${row.slug}.svg`,
    ...(row.djangoInvert ? { imgClass: 'tech-icon-django' } : {}),
  }))
}

function buildBlogPosts(posts: HomeBlogYaml[]): HomeBlogPost[] {
  return posts.map((p) => ({
    ...p,
    tagClass:
      p.tagVariant === 'tertiary' ? 'bg-tertiary/10 text-tertiary' : 'bg-primary/10 text-primary',
    shadow: p.tagVariant,
  }))
}

function buildSocial(links: HomeSocialYaml[]): HomeSocialLink[] {
  return links.map((l) => ({
    ...l,
    iconSrc: `${SOCIAL_ICONS_CDN}/${l.icon}.svg`,
  }))
}

const { data } = parseYamlFrontmatter(homeMd)
const fm = data as HomeFrontmatter

export function useHomeCopy(): HomeCopy {
  return {
    site: fm.site,
    a11y: fm.a11y,
    contact: fm.contact ?? { formEmail: '' },
    nav: fm.nav,
    hero: fm.hero,
    heroCode: fm.heroCode,
    authority: fm.authority,
    stats: fm.stats,
    techIntro: fm.techIntro,
    techStack: buildTechStack(fm.tech),
    blogIntro: fm.blogIntro,
    blogPosts: buildBlogPosts(fm.blogPosts),
    cta: fm.cta,
    footer: fm.footer,
    socialLinks: buildSocial(fm.social),
  }
}
