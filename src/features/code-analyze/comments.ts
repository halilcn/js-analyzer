import { ICommentsCodeAnalyze } from '../../common/types';
import { BLOCK_COMMENT_REGEX, INLINE_COMMENT_REGEX } from './constant.js';

const isInlineCommentLine = (contentLine: string) => new RegExp(INLINE_COMMENT_REGEX).test(contentLine);

// TODO: It should be better way to resolve comments
const getBlockCommentsCount = (content: string): number => {
  let totalBlockComments = 0;
  content.replace(BLOCK_COMMENT_REGEX, (matchedComment) => {
    totalBlockComments += matchedComment.split('\n').length;

    return '';
  });

  return totalBlockComments;
};

const getInlineCommentsCount = (content: string): number => content
  .split('\n')
  .reduce((acc, contentLine) => {
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
