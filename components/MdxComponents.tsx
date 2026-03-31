import Image from 'next/image';
import CodeBlock from './CodeBlock';

export function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-[2rem] border border-slate-200/80 bg-slate-100/90 p-6 text-slate-800 shadow-sm">
      <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Insight</p>
      <div className="mt-3 text-base leading-7">{children}</div>
    </div>
  );
}

export function Figure({ caption, src, alt }: { caption: string; src: string; alt: string }) {
  return (
    <figure className="my-10 rounded-[2rem] border border-slate-200/80 bg-white/90 p-6 shadow-soft">
      <Image src={src} alt={alt} width={1200} height={700} className="rounded-3xl object-cover" />
      <figcaption className="mt-4 text-sm text-slate-500">{caption}</figcaption>
    </figure>
  );
}

export function BlockQuote({ children }: { children: React.ReactNode }) {
  return <blockquote className="border-l-4 border-slate-300 pl-6 italic text-slate-700">{children}</blockquote>;
}

export function InlineCode({ children }: { children: React.ReactNode }) {
  return (
    <code className="rounded-md bg-slate-100 px-1.5 py-0.5 font-mono text-sm text-slate-800">{children}</code>
  );
}

const mdxComponents: Record<string, unknown> = {
  pre: ({ children }: { children: React.ReactNode }) => <div className="my-8">{children}</div>,
  code: ({ className, children }: { className?: string; children: React.ReactNode }) => (
    <CodeBlock className={className}>{String(children)}</CodeBlock>
  ),
  img: (props: any) => <Image {...props} className="rounded-3xl border border-slate-200/80 shadow-soft" />,
  blockquote: (props: any) => <BlockQuote {...props} />,
  strong: (props: any) => <strong className="font-semibold text-slate-900" {...props} />,
  em: (props: any) => <em className="italic text-slate-700" {...props} />,
  Callout,
  Figure,
  InlineCode,
};

export default mdxComponents;
