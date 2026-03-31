import { serialize } from 'next-mdx-remote/serialize';

export async function serializeMdx(source: string) {
  return await serialize(source, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    parseFrontmatter: true,
  });
}
