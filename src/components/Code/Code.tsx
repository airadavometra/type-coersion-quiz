import { FC } from "react";
import { LightAsync as SyntaxHighlighter } from "react-syntax-highlighter";
import javascript from "react-syntax-highlighter/dist/cjs/languages/hljs/javascript";
import { stackoverflowLight } from "react-syntax-highlighter/dist/esm/styles/hljs";

SyntaxHighlighter.registerLanguage("javascript", javascript);

export interface CodeProps {
  children: string;
}

export const Code: FC<CodeProps> = ({ children }) => {
  return (
    <SyntaxHighlighter language="javascript" style={stackoverflowLight}>
      {children}
    </SyntaxHighlighter>
  );
};
