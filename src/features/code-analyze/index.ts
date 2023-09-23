import fs from 'fs';
import { getCommentsAnalyze } from './comments.js';
import { ICodeAnalyze, ICommentsCodeAnalyze } from '../../common/types/index.js';
import { getTodosAnalyze } from './todos.js';

// boş line sayısı.
// ecmascript veya commonjs.
// variable type

export const handleCodeAnalyze = (files: string[]): ICodeAnalyze => {
  const initialCodeAnalyze: ICodeAnalyze = {
    comments: {
      blockComments: 0,
      inlineComments: 0,
      totalComments: 0,
    },
    totalTodos: 0,
  };

  const codeAnalyzes = files.reduce((acc, item) => {
    const fileContent = fs.readFileSync(item, { encoding: 'utf-8' });

    const commentsAnalyze = getCommentsAnalyze(fileContent);
    const todosAnalyze = getTodosAnalyze(fileContent);

    const comments = Object
      .entries(acc.comments)
      .reduce((fileCommentsAnalyze, [key, value]) => ({
        ...fileCommentsAnalyze,
        [key]: fileCommentsAnalyze[key as keyof ICommentsCodeAnalyze] + value,
      }), commentsAnalyze);

    return {
      comments,
      totalTodos: acc.totalTodos + todosAnalyze,
    };
  }, initialCodeAnalyze);

  return codeAnalyzes;
};
