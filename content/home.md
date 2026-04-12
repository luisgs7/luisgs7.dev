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
  subtitle: Artigos sobre APIs, Python, bases de dados e práticas de backend e DevOps que uso no dia a dia.
  archiveLink: Ir para o Blog
  readCaseStudy: Ler artigo

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
