import { ITodosAnalyze } from '../../common/types';
import { INLINE_TODO_REGEX } from './constant.js';

const isInlineTodoCommentLine = (inlineContent: string): boolean => new RegExp(INLINE_TODO_REGEX).test(inlineContent);

export const getTodosAnalyze = (content: string): ITodosAnalyze => content
  .split('\n')
  .reduce(
    (acc, contentLine) => (isInlineTodoCommentLine(contentLine) ? { totalTodos: acc.totalTodos + 1 } : acc),
    {
      totalTodos: 0,
    },
  );
