import fs from 'fs';
import { getCommentsAnalyze } from './comments.js';
import { ICodeAnalyze, ICommentsCodeAnalyze, ITodosAnalyze } from '../../common/types/index.js';
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
    todos: {
      totalTodos: 0,
    },
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

    const todos = Object
      .entries(acc.todos)
      .reduce((fileTodosAnalyze, [key, value]) => ({
        ...fileTodosAnalyze,
        [key]: fileTodosAnalyze[key as keyof ITodosAnalyze] + value,
      }), todosAnalyze);

    return {
      comments,
      todos,
    };
  }, initialCodeAnalyze);

  return codeAnalyzes;
};
