import homeFrontmatter from 'virtual:home-frontmatter'

const DEVICON_CDN = 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons'
const SOCIAL_ICONS_CDN = 'https://cdn.jsdelivr.net/npm/simple-icons@13.16.0/icons'

export type StatAccent = 'primary' | 'tertiary'

export interface HomeTimelineItem {
  period: string
  title: string
  body: string
  accent: StatAccent
}

export interface HomeTechYaml {
  name: string
  /** Caminho Devicon sem `.svg` (ex.: `python/python-original`). */
  slug?: string
  /** URL completa quando o ícone não existe no Devicon (ex.: Simple Icons). */
  iconUrl?: string
  djangoInvert?: boolean
  /** Ícone monocromático (Simple Icons): filtro para contraste no tema escuro. */
  simpleIcon?: boolean
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

export interface HomeFrontmatter {
  site: { title: string }
  a11y: {
    openMenu: string
    closeMenu: string
    closeMenuOverlay: string
    closeContactModal: string
    socialNav: string
    timeline: string
  }
  contact?: { formEmail: string }
  nav: { home: string; blog: string; courses: string; contact: string }
  hero: {
    badge: string
    titleLine1: string
    titleGradient: string
    leadPara1Before: string
    leadPara1Bold: string
    leadPara1After: string
    leadPara2: string
    ctaPrimary: string
    ctaSecondary: string
    profileAlt: string
    profileImage: string
  }
  authority: {
    titleBefore: string
    titleAccent: string
    bodyPara1: string
    bodyPara2: string
    bodyPara3Before: string
    bodyPara3Highlight: string
    bodyPara3After: string
    tagline: string
  }
  timeline: HomeTimelineItem[]
  techIntro: { title: string; subtitle: string }
  tech: HomeTechYaml[]
  blogIntro: { title: string; subtitle: string; archiveLink: string; readCaseStudy: string }
  cta: {
    titleBefore: string
    titleGradient: string
    body: string
    primary: string
    secondary: string
    secondaryHref?: string
  }
  footer: { brand: string; rightsName: string; rightsTagline: string }
  social: HomeSocialYaml[]
}

export interface HomeCopy {
  site: HomeFrontmatter['site']
  a11y: HomeFrontmatter['a11y']
  contact: { formEmail: string }
  nav: HomeFrontmatter['nav']
  hero: HomeFrontmatter['hero']
  authority: HomeFrontmatter['authority']
  timeline: HomeTimelineItem[]
  techIntro: HomeFrontmatter['techIntro']
  techStack: HomeTechItem[]
  blogIntro: HomeFrontmatter['blogIntro']
  cta: HomeFrontmatter['cta']
  footer: HomeFrontmatter['footer']
  socialLinks: HomeSocialLink[]
}

function buildTechStack(rows: HomeTechYaml[]): HomeTechItem[] {
  return rows.map((row) => {
    const img = row.iconUrl ?? `${DEVICON_CDN}/${row.slug}.svg`
    const classes = [row.djangoInvert && 'tech-icon-django', row.simpleIcon && 'tech-icon-simple'].filter(
      Boolean,
    ) as string[]
    return {
      name: row.name,
      img,
      ...(classes.length ? { imgClass: classes.join(' ') } : {}),
    }
  })
}

function buildSocial(links: HomeSocialYaml[]): HomeSocialLink[] {
  return links.map((l) => ({
    ...l,
    iconSrc: `${SOCIAL_ICONS_CDN}/${l.icon}.svg`,
  }))
}

const fm = homeFrontmatter as HomeFrontmatter

export function useHomeCopy(): HomeCopy {
  return {
    site: fm.site,
    a11y: fm.a11y,
    contact: fm.contact ?? { formEmail: '' },
    nav: fm.nav,
    hero: fm.hero,
    authority: fm.authority,
    timeline: fm.timeline ?? [],
    techIntro: fm.techIntro,
    techStack: buildTechStack(fm.tech),
    blogIntro: fm.blogIntro,
    cta: fm.cta,
    footer: fm.footer,
    socialLinks: buildSocial(fm.social),
  }
}
