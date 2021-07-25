import React, { FC } from 'react';
import { LightAsync as SyntaxHighlighter } from 'react-syntax-highlighter';
import { codeHighlightTheme } from '@style/codeHighlightTheme';
import javascript from 'react-syntax-highlighter/dist/cjs/languages/hljs/javascript';

SyntaxHighlighter.registerLanguage('javascript', javascript);

export interface CodeProps {
  code: string;
}

export const Code: FC<CodeProps> = ({ code }) => {
  return (
    <SyntaxHighlighter language="javascript" style={codeHighlightTheme}>
      {code}
    </SyntaxHighlighter>
  );
};
