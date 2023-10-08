import { INLINE_TODO_REGEX } from '../constant.js';

const isInlineTodoCommentLine = (inlineContent: string) => new RegExp(INLINE_TODO_REGEX).test(inlineContent);

export const getTodosAnalyze = (content: string): number => content
  .split('\n')
  .reduce((acc, contentLine) => (isInlineTodoCommentLine(contentLine) ? acc + 1 : acc), 0);
