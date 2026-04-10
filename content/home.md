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
  closeContactModal: Fechar formulário de contato
  socialNav: Redes sociais
  timeline: Linha do tempo

# Email do formulário de contato (mailto no cliente) — alinhado ao currículo.
contact:
  formEmail: luisgsilva260@gmail.com

nav:
  home: Início
  blog: Blog
  courses: Cursos
  contact: Contato

hero:
  badge: Backend Python · APIs · DevOps · IA como aliada
  titleLine1: Engenharia de software
  titleGradient: focada em resolver problemas reais.
  leadPara1Before: "Licenciado em Computação, com mais de dois anos de experiência em backend e DevOps. Uso sobretudo "
  leadPara1Bold: Python
  leadPara1After: ", com Django, DRF e FastAPI, e Linux na cloud, Docker, deploy e automatização."
  leadPara2: "Foco em perceber o que o cliente precisa e responder com soluções técnicas rápidas e claras. Uso inteligência artificial como aliada no dia a dia (exploração, tarefas repetitivas e revisão), com decisão e responsabilidade humanas no que importa."
  ctaPrimary: Entrar em contato
  ctaSecondary: Ler o blog
  profileAlt: Luís Gustavo Silva — desenvolvedor backend
  profileImage: /images/luis-hero.jpeg

authority:
  titleBefore: Da formação ao
  titleAccent: código em produção
  bodyPara1: Sou o Luís Gustavo Silva, licenciado em Computação pelo IFTO (Campus Colinas, Tocantins). Na minha experiência profissional como desenvolvedor backend, em regime remoto, aprofundei Python, APIs com Django e Django REST Framework, FastAPI, TDD, Celery, RabbitMQ e Redis, também em contextos com grandes volumes de dados, fazendo a ponte entre necessidades de clientes e a equipa de produto.
  bodyPara2: Em DevOps, crio e mantenho servidores na cloud, containers com Docker, deploy em produção, CI/CD com GitHub Actions e observabilidade com Prometheus e Grafana.
  bodyPara3Before: "No dia a dia, "
  bodyPara3Highlight: integro IA como aliada da engenharia
  bodyPara3After: ", alinhada ao produto e à qualidade, nunca como atalho em detrimento de rigor ou segurança."
  tagline: APIs estáveis, entrega contínua, infraestrutura alinhada ao produto e IA a serviço da engenharia.

# Linha do tempo (secção ao lado do texto de autoridade)
timeline:
  - period: 2017 — 2022
    title: Licenciatura em Computação
    body: "Instituto Federal do Tocantins (IFTO), Campus Colinas, Tocantins: licenciatura em Computação e bases sólidas em programação e engenharia de software."
    accent: tertiary
  - period: 2023 — presente
    title: Desenvolvimento backend
    body: "Em regime remoto: manutenção e evolução de APIs em Python com Django, Django REST Framework e FastAPI; TDD; Celery, RabbitMQ e Redis; DevOps com servidores na cloud, Docker, deploy em produção, GitHub Actions, Prometheus e Grafana."
    accent: primary

techIntro:
  title: Stack técnico principal
  subtitle: Tecnologias modernas e validadas em produção para plataformas resilientes e inteligentes.

# slug = caminho Devicon (sem .svg). djangoInvert / simpleIcon = filtros no tema escuro.
# iconUrl = URL SVG quando não há ícone no Devicon (ex.: Linode via Simple Icons).
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
  - name: VUE.JS
    slug: vuejs/vuejs-original
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
  - name: GRAFANA
    slug: grafana/grafana-original
  - name: PROMETHEUS
    slug: prometheus/prometheus-original
  - name: DIGITALOCEAN
    slug: digitalocean/digitalocean-original
  - name: AIRFLOW
    slug: apacheairflow/apacheairflow-original

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
