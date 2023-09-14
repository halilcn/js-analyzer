import path from 'path';
import fs from 'fs';
import { getCommentsAnalyze } from './comments.js';
import { ICodeAnalyze } from '../../common/types/index.js';

// boş line sayısı.
// ecmascript veya commonjs.
// todo sayisi
// variable type
// comment satır sayıso

export const handleCodeAnalyze = (files: string[]) => {
  const test = files.reduce((acc: ICodeAnalyze, item) => {
    const fileContent = fs.readFileSync(item, { encoding: 'utf-8' });
    // const fileContent = fs.readFileSync('/Users/halil/Desktop/others/js-analyzer/src/test.ts', { encoding: 'utf-8' });

    const commentsAnalyze = getCommentsAnalyze(fileContent);
    console.log('commentsAnalyze', commentsAnalyze);
    console.log('item', item);

    const { comments } = acc;
    return {
      ...acc,
      comments: {
        blockComments: comments.blockComments + commentsAnalyze.blockComments,
        inlineComments: comments.inlineComments + commentsAnalyze.inlineComments,
        totalComments: comments.totalComments + commentsAnalyze.totalComments,
      },
    };
  }, {
    comments: {
      blockComments: 0,
      inlineComments: 0,
      totalComments: 0,
    },
  });

  return test;
};
