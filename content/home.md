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

# Email do formulário de contacto (mailto no cliente) — alinhado ao currículo.
contact:
  formEmail: luisgsilva260@gmail.com

nav:
  home: Início
  blog: Blog
  courses: Cursos
  contact: Contacto

hero:
  badge: Backend Python · APIs · DevOps
  titleLine1: Engenharia de software
  titleGradient: focada em resolver problemas reais.
  leadBefore: Licenciado em Computação, há mais de dois anos a desenvolver e manter software com ênfase em backend e DevOps. Uso sobretudo
  leadNameBold: Python
  leadAfter: ", com Django, DRF e FastAPI, e apoio-me em Linux na cloud, Docker, deploy e automatização. O meu foco é perceber o que o cliente precisa e entregar uma solução técnica rápida e direta."
  ctaPrimary: Entrar em contacto
  ctaSecondary: Ler o blog
  profileAlt: Luís Gustavo Silva — desenvolvedor backend
  profileImage: /images/luis-hero.jpeg

heroCode:
  agents: "12"
  uptime: "99.99%"

authority:
  titleBefore: Da formação ao
  titleAccent: código em produção
  body: Sou o Luís Gustavo Silva, licenciado em Computação pelo IFTO (Campus Colinas, Tocantins). Na minha experiência profissional como desenvolvedor backend, em regime remoto, aprofundei Python, APIs com Django e Django REST Framework, FastAPI, TDD, Celery, RabbitMQ e Redis — fazendo a ponte entre necessidades de clientes e a equipa de produto. Em DevOps, crio e mantenho servidores na cloud, containers com Docker, deploy em produção, CI/CD com GitHub Actions e observabilidade com Prometheus e Grafana.
  tagline: APIs estáveis, entrega contínua e infraestrutura alinhada ao produto.

stats:
  - value: "2+"
    label: Anos backend
    accent: primary
  - value: "2021"
    label: Lic. Computação
    accent: tertiary
  - value: "2023"
    label: Backend remoto
    accent: primary
  - value: IFTO
    label: Instituto Federal TO
    accent: tertiary

techIntro:
  title: Stack técnico principal
  subtitle: Tecnologias modernas e validadas em produção para plataformas resilientes e inteligentes.

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
  title: Notas de engenharia
  subtitle: Textos sobre APIs, Python, bases de dados e práticas de backend e DevOps que uso no dia a dia.
  archiveLink: Ver arquivo completo
  readCaseStudy: Ler artigo

# tagVariant: primary | tertiary (define cores do badge e sombra no hover)
blogPosts:
  - tag: Django
    tagVariant: primary
    title: APIs com Django REST Framework em produção
    excerpt: Padrões de manutenção, testes e evolução de endpoints que servem equipas e clientes em ambiente real.
    imageAlt: Código e documentação de API
    image: https://lh3.googleusercontent.com/aida-public/AB6AXuBKGDHBhEANTThCcbC2tmS_8easCll3MT_K00yEE7dSzkSrm0BvuvhkChuTpu2LBE3SJ8PZT7n0Hp4wEuIHVb-VfA0MhhlYtg131N9A49kR48XxmHnG1mD3gZhg6XHzs9LoZ5q455uEETf_Zts3XDUngLuQVXXU2qZjY9-OlFoJ-V2gFweYNJJpvNv21lVXzr4aHXXr39G4n1a4A2p6ODTMDfb6foBc19whwShuxZ2oE-qUTsiAfi9rNMm1CVyz_jNsCMbLtImHxMY
  - tag: FastAPI
    tagVariant: tertiary
    title: FastAPI para serviços assíncronos
    excerpt: Quando escolher FastAPI, como estruturar rotas e integrar com filas e bases de dados de forma sustentável.
    imageAlt: Serviço API em execução
    image: https://lh3.googleusercontent.com/aida-public/AB6AXuApFe3tJep2M46xBelxnhpK7RcYM9rER2oK1zRjBzJUck4jH0EuBEBD0Ap3qeAAoF09mI1xJO_EQmZwpd8zdPI8qLE32z0BMkdXulhHZ_QVUsmNKCDrOgakIKe9RzFTgp2ffQw7cNcY6bhBXDw_HCWUvj9fuEfZXynoNU_nIya7FWbPp9cneJNJjedIyiR_0sEZfsubffGxTaE6kwYkpPhI2NdL2GQ6xGbdyeDgOUMY5vJw-qqVekHo5M6Rq9bXFqZhTMhSfK3cMLs
  - tag: DevOps
    tagVariant: primary
    title: Docker, cloud e observabilidade
    excerpt: Containers, deploy, Prometheus e Grafana para acompanhar o que corre em produção sem surpresas.
    imageAlt: Monitorização de infraestrutura
    image: https://lh3.googleusercontent.com/aida-public/AB6AXuD-akQukJUWNBb_ZAvd2o2TMvdcU7GPWqBYP1PSGoOUSXrIg0rutY8FOoOUtcIn23c2WmfPkCD_C9pqJ_YyxCT5EKvVUIz40XwtgMShrNNnZ3NVrvpuw1_HHdfY4PZlbBx4AiEjKldCVMrYw8xHYQVHergWf1QHWULUEEaC71KJa7fKzgezCvqkYrgsxsKRn13beF4cuE5QlQvhowy1XIZaA4ItU-MZ19B2eOCfl473gMRDoHdI90HWhM27K3G8k9w3mWOIj2wSSI0

cta:
  titleBefore: Quer falar sobre
  titleGradient: backend ou infraestrutura?
  body: Estou disponível para conversar sobre APIs em Python, Django, FastAPI, DevOps e boas práticas de entrega. Envie uma mensagem pelo formulário ou contacte-me no LinkedIn.
  primary: Enviar mensagem
  secondary: Ver GitHub
  secondaryHref: https://github.com/luisgs7

footer:
  brand: luisgs7.dev
  rightsName: Luís Gustavo Silva
  rightsTagline: Colinas do Tocantins, TO · Brasil — Backend & DevOps.

social:
  - label: GitHub
    href: https://github.com/luisgs7
    icon: github
  - label: LinkedIn
    href: https://www.linkedin.com/in/lu%C3%ADs-gustavo-8632181a3/
    icon: linkedin
---

O corpo deste ficheiro é ignorado pela app — pode usar esta área para notas. Os textos em uso estão no **YAML** entre os primeiros `---`.
