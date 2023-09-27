import fs from 'fs';
import { getCommentsAnalyze } from './comments.js';
import { ICodeAnalyze, ICommentsCodeAnalyze, ILogsCodeAnalyze } from '../../common/types/index.js';
import { getTodosAnalyze } from './todos.js';
import { getEmptyLinesAnalyze } from './general.js';
import { getLogsAnalyze } from './logs.js';
import { IHandleLogsAnalyze } from './types.js';

const handleGetLogsAnalyze = (payload: IHandleLogsAnalyze): ILogsCodeAnalyze => {
  const { fileContent, logs } = payload;

  const contentLogsAnalyze = getLogsAnalyze(fileContent);

  const hasCurrentLogsValue = Object.keys(logs).length > 0;
  const hasContentLogsValue = Object.keys(contentLogsAnalyze).length > 0;

  if (!hasCurrentLogsValue) return contentLogsAnalyze;
  if (!hasContentLogsValue) return logs;

  return Object
    .entries(logs)
    .reduce((logsAnalyze, [key, value]) => ({
      ...logsAnalyze,
      [key]: (contentLogsAnalyze[key] ?? 0) + value,
    }), {});
};

export const handleCodeAnalyze = (files: string[]): ICodeAnalyze => {
  const initialCodeAnalyze: ICodeAnalyze = {
    comments: {
      blockComments: 0,
      inlineComments: 0,
      totalComments: 0,
    },
    logs: {},
    totalTodos: 0,
    totalEmptyLines: 0,
  };

  const codeAnalyzes = files.reduce((acc, item) => {
    const fileContent = fs.readFileSync(item, { encoding: 'utf-8' });

    const commentsAnalyze = getCommentsAnalyze(fileContent);
    const todosAnalyze = getTodosAnalyze(fileContent);
    const linesAnalyze = getEmptyLinesAnalyze(fileContent);
    const logs = handleGetLogsAnalyze({ fileContent, logs: acc.logs });

    const comments = Object
      .entries(acc.comments)
      .reduce((fileCommentsAnalyze, [key, value]) => ({
        ...fileCommentsAnalyze,
        [key]: fileCommentsAnalyze[key as keyof ICommentsCodeAnalyze] + value,
      }), commentsAnalyze);

    return {
      comments,
      logs,
      totalTodos: acc.totalTodos + todosAnalyze,
      totalEmptyLines: acc.totalEmptyLines + linesAnalyze,
    };
  }, initialCodeAnalyze);

  return codeAnalyzes;
};
