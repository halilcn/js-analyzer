import { ICommentsCodeAnalyze } from '../../common/types';
import { BLOCK_COMMENT_REGEX, INLINE_BLOCK_COMMENT_REGEX, INLINE_COMMENT_REGEX } from './constant.js';

const isInlineCommentLine = (contentLine: string) => {
  const isInlineComment = new RegExp(INLINE_COMMENT_REGEX).test(contentLine);
  const isInlineBlockComment = new RegExp(INLINE_BLOCK_COMMENT_REGEX).test(contentLine);

  return isInlineComment || isInlineBlockComment;
};

const getBlockCommentsCount = (content: string): number => {
  const blockComments: string[] = [];
  content.replace(BLOCK_COMMENT_REGEX, (matchedComment) => {
    if (isInlineCommentLine(matchedComment)) return '';
    blockComments.push(matchedComment);
    return '';
  });

  const blockCommentsCount = blockComments.reduce((acc, item) => {
    const commentLineCount = item.split('\n').length;
    return acc + commentLineCount;
  }, 0);

  return blockCommentsCount;
};

const getInlineCommentsCount = (content: string): number => content
  .split('\n')
  .reduce((acc: number, contentLine: string) => {
    if (isInlineCommentLine(contentLine)) return acc + 1;
    return acc;
  }, 0);

export const getCommentsAnalyze = (content: string): ICommentsCodeAnalyze => {
  const inlineComments = getInlineCommentsCount(content);
  const blockComments = getBlockCommentsCount(content);

  return {
    blockComments,
    inlineComments,
    totalComments: blockComments + inlineComments,
  };
};
