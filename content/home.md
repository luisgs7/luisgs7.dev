---
# =============================================================================
# Página inicial — edite os textos abaixo (YAML). Salve o ficheiro e recarregue.
# Mantenha a indentação; use aspas em frases com : ou caracteres especiais.
# =============================================================================

site:
  title: luisgs7.dev

a11y:
  openMenu: Abrir menu
  closeMenu: Fechar menu
  closeMenuOverlay: Fechar menu
  closeContactModal: Fechar formulário de contacto
  socialNav: Redes sociais

# Email que recebe mensagens do formulário Contact (mailto no cliente).
contact:
  formEmail: hello@luisgs7.dev

nav:
  home: Home
  blog: Blog
  courses: Courses
  contact: Contact

hero:
  badge: Engineering Intelligence
  titleLine1: Architecting the Future
  titleGradient: of Intelligent Systems.
  leadBefore: Personalized high-performance infrastructure for the AI era. I'm
  leadNameBold: Luís Gustavo
  leadAfter: ", building robust digital foundations where complex neural architectures meet industry-grade engineering."
  ctaPrimary: View Projects
  ctaSecondary: Read the Blog
  profileAlt: Luís Gustavo - Technical Architect
  profileImage: https://lh3.googleusercontent.com/aida-public/AB6AXuDDDWFTsMI575ANric6tDJIvMV2nJhj7qZoEnOmXK23ZN55qfPZCBGKoldhI3YilbdbeeoWnIzNlzvtJY-cg7ohZZMIuCHZf_ijocnxaniyuuh7GivOhY0BAcT6yQHQOynbawoe45bbkP5ZJy8Js2bsX9q5OYNMHTnvRX7ch-k0xQqsMvBzSHvB8otJgFihdM2oSQpnpy5RngfTSZNz7zMHNFA8vca5z40A0yji3DF7-jwGomUz7P_gsPy-OTVnFE-xieBk1xu1_Vw

heroCode:
  agents: "12"
  uptime: '"99.99%"'

authority:
  titleBefore: Designing Systems for the
  titleAccent: Intelligence Era
  body: I'm Luís, a software architect with a decade of experience scaling digital products. I don't just write code; I design ecosystems that leverage Large Language Models and custom neural networks to solve complex business problems at scale.
  tagline: Reliability first, intelligence always.

stats:
  - value: "2+"
    label: Years Exp.
    accent: primary
  - value: "20M+"
    label: Daily Requests
    accent: tertiary
  - value: "50+"
    label: Systems Built
    accent: primary
  - value: "99.9"
    label: Uptime SLA
    accent: tertiary

techIntro:
  title: Core Technical Arsenal
  subtitle: Modern, battle-tested technologies used to build resilient and intelligent platforms.

# slug = caminho Devicon (sem .svg). djangoInvert aplica o filtro branco no logo.
tech:
  - name: PYTHON
    slug: python/python-original
  - name: DJANGO
    slug: django/django-plain
    djangoInvert: true
  - name: REACT NATIVE
    slug: reactnative/reactnative-original
  - name: JAVASCRIPT
    slug: javascript/javascript-original
  - name: SQL
    slug: mysql/mysql-original
  - name: POSTGRESQL
    slug: postgresql/postgresql-original
  - name: FASTAPI
    slug: fastapi/fastapi-original
  - name: LINUX
    slug: linux/linux-original
  - name: AWS
    slug: amazonwebservices/amazonwebservices-plain-wordmark
  - name: DOCKER
    slug: docker/docker-original

blogIntro:
  title: Deep Tech Insights
  subtitle: Detailed explorations into the technical challenges of modern engineering and autonomous agent design.
  archiveLink: Explore Full Archive
  readCaseStudy: READ CASE STUDY

# tagVariant: primary | tertiary (define cores do badge e sombra no hover)
blogPosts:
  - tag: Architecture
    tagVariant: primary
    title: Scaling Systems Beyond 10k Nodes
    excerpt: Exploring the limits of cluster orchestration and why traditional consensus fails under pressure.
    imageAlt: System Architecture
    image: https://lh3.googleusercontent.com/aida-public/AB6AXuBKGDHBhEANTThCcbC2tmS_8easCll3MT_K00yEE7dSzkSrm0BvuvhkChuTpu2LBE3SJ8PZT7n0Hp4wEuIHVb-VfA0MhhlYtg131N9A49kR48XxmHnG1mD3gZhg6XHzs9LoZ5q455uEETf_Zts3XDUngLuQVXXU2qZjY9-OlFoJ-V2gFweYNJJpvNv21lVXzr4aHXXr39G4n1a4A2p6ODTMDfb6foBc19whwShuxZ2oE-qUTsiAfi9rNMm1CVyz_jNsCMbLtImHxMY
  - tag: AI & ML
    tagVariant: tertiary
    title: From RAG to Agentic Workflows
    excerpt: Implementing autonomous agent loops for complex multi-step reasoning in production environments.
    imageAlt: Neural Network
    image: https://lh3.googleusercontent.com/aida-public/AB6AXuApFe3tJep2M46xBelxnhpK7RcYM9rER2oK1zRjBzJUck4jH0EuBEBD0Ap3qeAAoF09mI1xJO_EQmZwpd8zdPI8qLE32z0BMkdXulhHZ_QVUsmNKCDrOgakIKe9RzFTgp2ffQw7cNcY6bhBXDw_HCWUvj9fuEfZXynoNU_nIya7FWbPp9cneJNJjedIyiR_0sEZfsubffGxTaE6kwYkpPhI2NdL2GQ6xGbdyeDgOUMY5vJw-qqVekHo5M6Rq9bXFqZhTMhSfK3cMLs
  - tag: DevOps
    tagVariant: primary
    title: Platform Engineering vs. SRE
    excerpt: Building Internal Developer Platforms to reduce cognitive load without sacrificing excellence.
    imageAlt: Code Interface
    image: https://lh3.googleusercontent.com/aida-public/AB6AXuD-akQukJUWNBb_ZAvd2o2TMvdcU7GPWqBYP1PSGoOUSXrIg0rutY8FOoOUtcIn23c2WmfPkCD_C9pqJ_YyxCT5EKvVUIz40XwtgMShrNNnZ3NVrvpuw1_HHdfY4PZlbBx4AiEjKldCVMrYw8xHYQVHergWf1QHWULUEEaC71KJa7fKzgezCvqkYrgsxsKRn13beF4cuE5QlQvhowy1XIZaA4ItU-MZ19B2eOCfl473gMRDoHdI90HWhM27K3G8k9w3mWOIj2wSSI0

cta:
  titleBefore: Let's Build Something
  titleGradient: Exceptional Together
  body: I am currently accepting select engineering and consulting projects for Q4 2024. Let's discuss your product roadmap.
  primary: Get in Touch
  secondary: View Resume

footer:
  brand: luisgs7.dev
  rightsName: Luís Gustavo
  rightsTagline: Built for the era of high-speed innovation.

social:
  - label: GitHub
    href: https://github.com/luisgs7
    icon: github
  - label: LinkedIn
    href: https://www.linkedin.com/in/lu%C3%ADs-gustavo-8632181a3/
    icon: linkedin
---

O corpo deste ficheiro é ignorado pela app — pode usar esta área para notas. Os textos em uso estão no **YAML** entre os primeiros `---`.
