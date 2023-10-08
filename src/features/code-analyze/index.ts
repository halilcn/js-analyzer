import fs from 'fs';
import { getCommentsAnalyze } from './plugins/comments.js';
import {
  ICodeAnalyze, ICommentsCodeAnalyze, ILogsCodeAnalyze, NamingConventionEnum,
} from '../../common/types/index.js';
import { getTodosAnalyze } from './plugins/todos.js';
import { getEmptyLinesAnalyze } from './plugins/general.js';
import { getLogsAnalyze } from './plugins/logs.js';
import { IHandleGetCommentsAnalyze, IHandleGetVariablesConventionsAnalyze, IHandleLogsAnalyze } from './types.js';
import { getVariablesConventionsAnalyze } from './plugins/variables.js';

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

const handleGetCommentsAnalyze = (payload: IHandleGetCommentsAnalyze) => {
  const { fileContent, comments } = payload;

  const contentCommentsAnalyze = getCommentsAnalyze(fileContent);

  return Object
    .entries(comments)
    .reduce((fileCommentsAnalyze, [key, value]) => ({
      ...fileCommentsAnalyze,
      [key]: fileCommentsAnalyze[key as keyof ICommentsCodeAnalyze] + value,
    }), contentCommentsAnalyze);
};

const handleGetVariablesConventionsAnalyze = (payload: IHandleGetVariablesConventionsAnalyze) => {
  const { variablesConventions, fileContent } = payload;

  const variablesConventionsAnalyzes = getVariablesConventionsAnalyze(fileContent);

  return Object
    .entries(variablesConventionsAnalyzes)
    .reduce(
      (acc, [key, value]) => ({
        ...acc,
        [key]: (variablesConventions[key as NamingConventionEnum] ?? 0) + value,
      }),
      variablesConventions,
    );
};

export const handleCodeAnalyze = (files: string[]): ICodeAnalyze => {
  const initialCodeAnalyze: ICodeAnalyze = {
    comments: {
      blockComments: 0,
      inlineComments: 0,
      totalComments: 0,
    },
    logs: {},
    variablesConventions: {},
    totalTodos: 0,
    totalEmptyLines: 0,
  };

  const codeAnalyzes = files.reduce((acc, item) => {
    const fileContent = fs.readFileSync(item, { encoding: 'utf-8' });

    const comments = handleGetCommentsAnalyze({ fileContent, comments: acc.comments });
    const todosAnalyze = getTodosAnalyze(fileContent);
    const linesAnalyze = getEmptyLinesAnalyze(fileContent);
    const logs = handleGetLogsAnalyze({ fileContent, logs: acc.logs });
    const variablesConventions = handleGetVariablesConventionsAnalyze({
      fileContent,
      variablesConventions: acc.variablesConventions,
    });

    return {
      comments,
      logs,
      variablesConventions,
      totalTodos: acc.totalTodos + todosAnalyze,
      totalEmptyLines: acc.totalEmptyLines + linesAnalyze,
    };
  }, initialCodeAnalyze);

  return codeAnalyzes;
};
