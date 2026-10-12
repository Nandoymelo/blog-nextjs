import { posts } from '#site/content';
import { BlogList } from '@/templates/blog';

export default function BlogListPage() {
  const sortedPosts = posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return <BlogList posts={sortedPosts} />;
}