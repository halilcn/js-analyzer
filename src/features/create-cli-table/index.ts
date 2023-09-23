import Table from 'cli-table';
import { IAllAnalyzes, ICodeAnalyze, IFileAnalyze } from '../../common/types/index.js';
import {
  createCLILineCountTable,
  createCLIMultipleRowsCountTable,
  createCLITableTitle,
  normalizeRowsFromObject,
} from './helpers.js';

const createFileAnalyze = (fileAnalyzes: IFileAnalyze): Table[] => {
  const { totalFile, ...restOfFileAnalyzes } = fileAnalyzes;

  const tableTitle = createCLITableTitle({ title: 'File Analyzes' });
  const totalFileTable = createCLILineCountTable({ head: ['total file count', String(totalFile)] });

  const restOfAnalyzesTables = Object
    .entries(restOfFileAnalyzes)
    .map(([key, value]) => createCLIMultipleRowsCountTable({
      head: [key, 'quantity'],
      rows: normalizeRowsFromObject(value),
    }));

  return [tableTitle, ...restOfAnalyzesTables, totalFileTable];
};

const createCodeAnalyze = (codeAnalyze: ICodeAnalyze): Table[] => {
  const { totalTodos, ...restOfCodeAnalyzes } = codeAnalyze;

  const tableTitle = createCLITableTitle({ title: 'Code Analyzes' });
  const totalTodosTable = createCLILineCountTable({ head: ['total todos count', String(totalTodos)] });

  const restOfAnalyzesTables = Object
    .entries(restOfCodeAnalyzes)
    .map(([key, value]) => createCLIMultipleRowsCountTable({
      head: [key, 'quantity'],
      rows: normalizeRowsFromObject(value),
    }));

  return [tableTitle, ...restOfAnalyzesTables, totalTodosTable];
};

export const createCLITables = (allAnalyzes: IAllAnalyzes): Table[] => {
  const allFileAnalyzeTables = createFileAnalyze(allAnalyzes.fileAnalyzes);
  const allCodeAnalyzeTables = createCodeAnalyze(allAnalyzes.codeAnalyzes);

  return [...allFileAnalyzeTables, ...allCodeAnalyzeTables];
};
