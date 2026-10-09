<div align="center">

# 🚀 Site & Blog — Next.js

Landing page e blog em Markdown, desenvolvidos com **Next.js**, **TypeScript** e **Tailwind CSS**.

Projeto feito junto com a [**Rocketseat**](https://www.rocketseat.com.br) 💜

[Demo](https://SEU-LINK-DE-DEPLOY.vercel.app) · [Reportar bug](../../issues)

</div>

---

## 📖 Sobre o projeto

Aplicação com uma **landing page** e um **blog** cujos posts são escritos em arquivos Markdown. O conteúdo é validado e processado em tempo de build com o **Velite**, e a interface é construída com componentes do **shadcn/ui** estilizados com Tailwind CSS.

Este projeto foi desenvolvido durante o aprendizado com a Rocketseat, aplicando boas práticas de organização de código, componentização e tipagem.

## ✨ Funcionalidades

- 🏠 Landing page responsiva
- 📝 Blog com posts em Markdown (frontmatter tipado e validado)
- 📄 Página individual para cada post, com renderização de Markdown
- 🗂️ Listagem de posts com cards
- 🎨 Componentes de UI reutilizáveis com shadcn/ui
- 📱 Layout adaptado para mobile e desktop

## 🛠️ Tecnologias

| Tecnologia | Uso |
| --- | --- |
| [Next.js](https://nextjs.org) | Framework React (Pages Router) |
| [TypeScript](https://www.typescriptlang.org) | Tipagem estática |
| [Tailwind CSS](https://tailwindcss.com) | Estilização |
| [shadcn/ui](https://ui.shadcn.com) | Componentes de interface |
| [Velite](https://velite.js.org) | Conteúdo em Markdown com schema tipado |

## 📁 Estrutura

```
├── posts/              # Posts do blog em Markdown
├── public/             # Imagens e arquivos estáticos
├── src/
│   ├── components/     # Componentes reutilizáveis (ui, layout, markdown...)
│   ├── hooks/          # Hooks customizados
│   ├── lib/            # Utilitários
│   ├── pages/          # Rotas da aplicação
│   ├── styles/         # Estilos globais
│   └── templates/      # Templates de página (landing page, blog)
├── velite.config.ts    # Schema e configuração do conteúdo
└── tailwind.config.ts  # Configuração do Tailwind
```

## 🚀 Como rodar

Pré-requisito: [Node.js](https://nodejs.org) 18 ou superior.

```bash
# Clone o repositório
git clone https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git

# Entre na pasta
cd SEU-REPOSITORIO

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

### Scripts

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Build de produção |
| `npm run start` | Executa o build de produção |

## ✍️ Adicionando um post

Crie um arquivo `.md` na pasta `posts/` com o frontmatter definido em `velite.config.ts`:

```md
---
title: "Título do post"
description: "Resumo curto do post"
date: 2026-10-09
image: /assets/meu-post.png
---

Conteúdo do post em Markdown.
```

Coloque a imagem de capa em `public/assets/`.

## 🌐 Deploy

O deploy é feito na [Vercel](https://vercel.com). Cada push na branch `main` gera um novo build automaticamente.

## 💜 Rocketseat

Conteúdo e projeto criados com base no ensino da [Rocketseat](https://www.rocketseat.com.br), referência em educação em tecnologia no Brasil.

---

<div align="center">

Feito por Fernando (https://github.com/Nandoymelo)

</div>
