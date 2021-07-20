import React, { FC } from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { codeHighlightTheme } from '@style/codeHighlightTheme';

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
