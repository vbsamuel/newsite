'use client';

import { MDXRemote } from 'next-mdx-remote';
import type { MDXRemoteSerializeResult } from 'next-mdx-remote';
import MdxComponents from './MdxComponents';

export default function ArticleRenderer({ source }: { source: MDXRemoteSerializeResult }) {
  return (
    <div className="prose prose-slate max-w-none">
      <MDXRemote {...source} components={MdxComponents as any} />
    </div>
  );
}
