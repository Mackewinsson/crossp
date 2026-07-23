import { MDXRemote } from 'next-mdx-remote/rsc';
import { blogMdxComponents } from '@/components/blog/mdx-components';

export async function BlogContent({ source }: { source: string }) {
  return (
    <div className="space-y-6 prose-blog">
      <MDXRemote source={source} components={blogMdxComponents} />
    </div>
  );
}
