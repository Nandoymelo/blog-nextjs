import { defineConfig, defineCollection, s } from 'velite';

const posts = defineCollection({
  name: 'Post',
  pattern: '**/*.md',
  schema: s
    .object({
      title: s.string(),
      date: s.isodate(),
      description: s.string(),
      image: s.string(),
      slug: s.path(),
      body: s.markdown(),
      author: s.object({
        name: s.string(),
        avatar: s.string(),
       }),
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
  markdown: {
    gfm: true,
  },
  collections: { posts },
});