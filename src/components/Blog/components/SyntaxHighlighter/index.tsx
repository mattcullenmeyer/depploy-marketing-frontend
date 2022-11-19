import {
  CodeBlock,
  CodeBlockHeader,
  CodeBlockWrapper,
} from '@twilio-paste/core/code-block';

// node_modules/@twilio-paste/code-block/dist/CodeBlock.d.ts
type CodeSnippetLanguages =
  | 'javascript'
  | 'jsx'
  | 'csharp'
  | 'php'
  | 'ruby'
  | 'python'
  | 'java'
  | 'json'
  | 'c'
  | 'bash'
  | 'shell'
  | 'go'
  | 'groovy';

const languages: Record<string, CodeSnippetLanguages> = {
  golang: 'go',
};

const getLanguage = (language: string): CodeSnippetLanguages => {
  if (languages[language]) {
    return languages[language];
  }
  return language as CodeSnippetLanguages;
};

export interface SanityCodeBlock {
  _key: string;
  _type: string;
  code: string;
  language: CodeSnippetLanguages;
}

interface SyntaxHighlighterProps {
  value: SanityCodeBlock;
}

export function SyntaxHighlighter({ value }: SyntaxHighlighterProps) {
  const { language, code } = value;
  const codeBlockLanguage = getLanguage(language);

  return (
    <CodeBlockWrapper>
      <CodeBlockHeader>{codeBlockLanguage}</CodeBlockHeader>
      <CodeBlock showLineNumbers language={codeBlockLanguage} code={code} />
    </CodeBlockWrapper>
  );
}
