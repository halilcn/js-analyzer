export const getEmptyLinesAnalyze = (content: string) => content
  .split('\n')
  .filter((lineContent) => lineContent.length === 0)
  .length;
