import { defineConfig, defineCollection, s } from 'velite';

const posts = defineCollection({
  name: 'Post',
  pattern: '**/*.md',
  schema: s.object({
    title: s.string(),
    date: s.isodate(),
    description: s.string(),
    image: s.string().regex(/^\//, 'O caminho deve começar com /'),
    author: s.object({
      name: s.string(),
      avatar: s.string().regex(/^\//, 'O caminho deve começar com /'),
    }),
    slug: s.path(),
    raw: s.raw(),
    
  }),
});

export default defineConfig({
  root: 'posts',
  output: {
    data: '.velite',
    assets: 'public/static',
    base: '/static/',
    name: '[name]-[hash:6].[ext]',
    clean: true,
  },
  collections: { posts },
});