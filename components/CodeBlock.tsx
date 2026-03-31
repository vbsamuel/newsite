'use client';

import { useMemo } from 'react';
import Highlight, { defaultProps, type Language } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/vsDark';

export default function CodeBlock({ children, className }: { children: string; className?: string }) {
  const language = useMemo(() => {
    if (!className) return 'bash';
    return className.replace(/language-/, '') as Language;
  }, [className]);

  return (
    <Highlight {...defaultProps} theme={theme} code={children.trim()} language={language}> 
      {({ className: outerClass, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={`${outerClass} rounded-3xl border border-slate-200/80 bg-slate-950/95 p-6 text-sm`} style={{ ...style, padding: '1.25rem' }}>
          {tokens.map((line, index) => (
            <div key={index} {...getLineProps({ line, key: index })}>
              {line.map((token, tokenIndex) => (
                <span key={tokenIndex} {...getTokenProps({ token, key: tokenIndex })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
}
