const isInlineCommentLine = (contentLine: string) => {
  const regex = new RegExp('//.*');
  const rex = regex.test(contentLine);

  return rex;
};

const getBlockCommentsCount = (content: string): number => {
  const allMatchedComments: string[] = [];
  content.replace(/\/\**\s*(.*?)\s*\*\//g, (matchedComment) => {
    allMatchedComments.push(matchedComment);
    return '';
  });

  return allMatchedComments.reduce((acc, item) => {
    const commentLineCount = item.split('\n').length;

    if (commentLineCount === 1) return acc;
    return acc + commentLineCount;
  }, 0);
};

export const getTotalCommentsLine = (content: string): number => {
  const res = content.split('\n').reduce((acc: any, contentLine: string) => {
    if (isInlineCommentLine(contentLine)) {
      return {
        ...acc,
        inlineComment: acc.inlineComment + 1,
      };
    }

    return {};
  }, {
    inlineComment: 0,
  });

  const totalBlockCommentsCount = getBlockCommentsCount(content);
  console.log('totalBlockCommentsCount', totalBlockCommentsCount);

  return 1;
};
