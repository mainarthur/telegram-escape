type EscapeFunction = (text: string) => string;
type TagEscapeFunction = (
  template: TemplateStringsArray,
  ...substitutions: any[]
) => string;

export const escapeHTML: EscapeFunction;
export const escapeMarkdown: EscapeFunction;
export const escapeMarkdownV1: EscapeFunction;
export const HTML: TagEscapeFunction;
export const md: TagEscapeFunction;
export const mdv1: TagEscapeFunction;
