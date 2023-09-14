import path from 'path';
import fs from 'fs';
import { getCommentsAnalyze } from './comments.js';
import { ICodeAnalyze } from '../../common/types/index.js';
import { getTodosAnalyze } from './todos.js';

// boş line sayısı.
// ecmascript veya commonjs.
// variable type

export const handleCodeAnalyze = (files: string[]) => {
  const initialCodeAnalyze = {
    comments: {
      blockComments: 0,
      inlineComments: 0,
      totalComments: 0,
    },
    todos: {
      totalTodos: 0,
    },
  };

  const res = files.reduce((acc: ICodeAnalyze, item) => {
    const fileContent = fs.readFileSync(item, { encoding: 'utf-8' });
    // const fileContent = fs.readFileSync('/Users/halil/Desktop/others/js-analyzer/src/test.ts', { encoding: 'utf-8' });

    const commentsAnalyze = getCommentsAnalyze(fileContent);
    const todosAnalyze = getTodosAnalyze(fileContent);

    const { comments, todos } = acc;
    return {
      ...acc,
      comments: {
        blockComments: comments.blockComments + commentsAnalyze.blockComments,
        inlineComments: comments.inlineComments + commentsAnalyze.inlineComments,
        totalComments: comments.totalComments + commentsAnalyze.totalComments,
      },
      todos: {
        totalTodos: todos.totalTodos + todosAnalyze.totalTodos,
      },
    };
  }, initialCodeAnalyze);

  return res;
};
