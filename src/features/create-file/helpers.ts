import stripAnsi from 'strip-ansi';

export const normalizeTableContent = (content: string): string => stripAnsi(content);
