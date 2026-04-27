# Geo3Tech - Landing Page Institucional

## 📋 Descrição do Projeto

O Geo3Tech é uma landing page moderna e responsiva desenvolvida para a empresa Geo3Tech, especializada em segurança eletrônica, CFTV, controle de acesso, automação e infraestrutura de redes em Salvador - BA. O site foi estruturado com foco em **captação de clientes** e **apresentação institucional**, utilizando estratégias de design e interação para gerar contatos qualificados via WhatsApp.

Este projeto demonstra a integração de tecnologias modernas com práticas consolidadas de desenvolvimento web, criando uma experiência do usuário intuitiva e profissional.

---

## 🎯 Objetivo

A landing page foi desenvolvida com os seguintes objetivos:

- **Captação de Leads**: Gerar contatos qualificados através de chamadas para ação (CTA) direcionadas ao WhatsApp
- **Apresentação Institucional**: Transmitir credibilidade, profissionalismo e confiança sobre os serviços da Geo3Tech
- **Experiência do Usuário**: Proporcionar navegação intuitiva e fluidez visual através de animações e transições
- **Compatibilidade**: Garantir responsividade e acessibilidade em diferentes dispositivos e navegadores

---

## 🛠️ Tecnologias Utilizadas

O projeto foi desenvolvido com as seguintes tecnologias:

- **HTML5**: Estrutura semântica e bem organizada com otimização de SEO
- **CSS3**: Estilização avançada com animações, transições fluidas e variáveis CSS
- **JavaScript**: Interatividade, tratamento de eventos e animações em scroll
- **Google Fonts**: Tipografia profissional (Inter + Plus Jakarta Sans)
- **Figma**: Design da interface criado previamente com alta fidelidade
- **Web Animations API**: Animações performáticas via IntersectionObserver

### Destaques Técnicos

✨ **Design System**: Interface totalmente projetada no Figma antes da implementação, garantindo consistência visual e alinhamento com identidade visual da marca

🎬 **Animações Fluidas**: Animações CSS customizadas e JavaScript com IntersectionObserver para reveal on scroll

📱 **Mobile-First Responsive**: Design responsivo que se adapta perfeitamente a qualquer tamanho de tela

🔍 **Otimização SEO**: Meta tags, Open Graph, Twitter Card e structured data

---

## 📂 Estrutura do Projeto

```
geo3tech/
│
├── index.html                    # Página principal (HTML5 semântico)
│
├── public/                       # Arquivos estáticos
│   ├── css/
│   │   └── style.css            # Estilos principais com CSS3 avançado
│   │                            # - Variables CSS para tema
│   │                            # - Animações e transições
│   │                            # - Design responsivo (mobile-first)
│   │
│   ├── js/
│   │   └── main.js              # Lógica JavaScript da aplicação
│   │                            # - Toggle de menu mobile
│   │                            # - Animações em scroll (reveal)
│   │                            # - Interatividades gerais
│   │
│   └── images/
│       └── hero-bg.jpg          # Imagem hero/background
│
├── package.json                  # Dependências e scripts do projeto
├── vite.config.ts               # Configuração do Vite (build tool)
├── tsconfig.json                # Configuração do TypeScript
├── tailwind.config.ts           # Configuração do Tailwind CSS
├── eslint.config.js             # Configuração de linting
├── postcss.config.js            # Configuração do PostCSS
├── components.json              # Configuração de componentes
│
├── .gitignore                   # Arquivos ignorados pelo Git
├── README.md                    # Este arquivo
│
├── node_modules/               # Dependências instaladas (npm)
└── bun.lock                     # Lock file (gerenciador Bun)
```

### Detalhamento dos Arquivos Principais

**index.html**
- Estrutura HTML5 semântica
- Meta tags SEO completas
- Open Graph e Twitter Cards para compartilhamento social
- Favicon e preload de fontes para performance
- Referência a CSS e JS externos

**public/css/style.css**
- Variáveis CSS (colors, shadows, typography)
- Estilos globais e resets
- Layout com container fluid
- Animações CSS customizadas
- Media queries para responsividade
- Tema com propriedades customizáveis

**public/js/main.js**
- Mobile menu toggle com ARIA labels
- Animação de reveal on scroll com IntersectionObserver
- Atualização dinâmica do ano no footer
- Event listeners para interatividades

---

## 🚀 Como Executar Localmente

### Pré-requisitos

Certifique-se de ter instalado em sua máquina:

- **Node.js** (versão 16.0 ou superior)
- **npm** ou **yarn**
- **Bun** (opcional, para gerenciamento de dependências)

### Passos de Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/igor-vasconcellos/geo3tech.git
   cd geo3tech
   ```

2. **Instale as dependências**
   ```bash
   npm install
   # ou
   bun install
   ```

3. **Inicie o servidor de desenvolvimento**
   ```bash
   npm run dev
   ```

   O site será aberto automaticamente em `http://localhost:5173` (ou a porta indicada no terminal)

4. **Para visualizar em produção**
   ```bash
   npm run build
   npm run preview
   ```

   Isso gera uma versão otimizada do projeto na pasta `dist/`

---

## 📊 Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia o servidor de desenvolvimento com hot reload |
| `npm run build` | Compila o projeto para produção |
| `npm run build:dev` | Compila em modo development |
| `npm run preview` | Visualiza a versão de produção localmente |
| `npm run lint` | Executa verificação de código com ESLint |
| `npm run test` | Executa testes com Vitest |
| `npm run test:watch` | Modo watch para testes em desenvolvimento |

---

## ✨ Principais Características

### 🎨 Design Profissional
- Interface moderna alinhada com tendências de UX/UI 2024+
- Paleta de cores cuidadosamente planejada com suporte a modo claro
- Typography hierárquica com fontes profissionais (Inter + Plus Jakarta Sans)
- Sistema de tokens de design (cores, espaçamento, shadows)

### 🎭 Animações Fluidas
- Transições suaves entre seções
- Efeitos de reveal on scroll com IntersectionObserver
- Animações em hover para elementos interativos
- Menu mobile com animação fluida
- Performance otimizada via CSS e JavaScript nativo

### 📞 Integração WhatsApp
- Botões CTA estrategicamente posicionados
- Link de WhatsApp com mensagens pré-configuradas
- Número de contato destacado na topbar
- Estilo customizado para botões de WhatsApp

### 📱 Mobile-First Responsive
- Adaptação perfeita para smartphones (320px+), tablets e desktops
- Menu hamburger adaptável
- Touch-friendly interface com área de clique adequada
- Performance otimizada para conexões 3G/4G

### 🔍 SEO Otimizado
- Meta tags completas e estruturadas
- Open Graph para compartilhamento social
- Twitter Card
- URL canônica
- Estrutura semântica HTML5

---

## 🚧 Melhorias Futuras

Abaixo estão as melhorias previstas para próximas versões:

- [ ] Integração com formulário de contato backend
- [ ] Sistema de análise e rastreamento de clientes (Google Analytics 4)
- [ ] Chat automatizado com bot de IA
- [ ] Galeria de portfólio/projetos com filtros dinâmicos
- [ ] Sistema de depoimentos com avaliações de clientes
- [ ] Integração com CRM para gestão de leads
- [ ] Blog institucional com artigos sobre segurança e tecnologia
- [ ] Versão em múltiplos idiomas
- [ ] Dark mode com toggle de tema
- [ ] PWA (Progressive Web App) offline
- [ ] Lazy loading de imagens
- [ ] Geolocalização para ofertas regionalizadas

---

## 🎓 Contexto e Objetivo do Desenvolvedor

Este projeto foi desenvolvido como **trabalho freelancer** com a finalidade de:

✅ Demonstrar competências em desenvolvimento web full-stack  
✅ Criar um case study profissional para portfólio  
✅ Captar novos clientes e projetos similares  
✅ Aplicar boas práticas de desenvolvimento e design  
✅ Consolidar conhecimentos em tecnologias modernas  

O projeto serve como referência técnica e criativa para possíveis colaborações futuras.

---

## 👨‍💻 Desenvolvedor

**Igor Vasconcellos**  
Especialista em Desenvolvimento Web | Full Stack JavaScript

📧 GitHub: [@igor-vasconcellos](https://github.com/igor-vasconcellos)

---

## 📄 Licença

Este projeto é fornecido como é, para fins de portfólio e demonstração de habilidades.  
Todos os direitos reservados © 2026 Geo3Tech

---

## 🤝 Contribuições

Se você tem sugestões ou encontrou algum problema, sinta-se à vontade para abrir uma issue ou pull request.

---

**Desenvolvido com ❤️ e dedicação ao detalhe.**
