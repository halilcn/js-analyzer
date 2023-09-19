import Table from 'cli-table';
import { IAllAnalyzes, ICodeAnalyze, IFileAnalyze } from '../../common/types/index.js';
import { ICreateTable } from './types.js';
import { normalizeRows } from './helpers.js';

const createCLITable = (tableInfo: ICreateTable): Table => {
  const { title, rows } = tableInfo;

  const table = new Table({ head: [title] });
  table.push(...rows);

  return table;
};

const createCLIFileAnalyze = (fileAnalyze: IFileAnalyze): Table[] => {
  const allTables = Object.entries(fileAnalyze)
    .map(([key, value]) => createCLITable({ title: key, rows: normalizeRows(value) }));
  return allTables;
};

const createCodeAnalyze = (codeAnalyze: ICodeAnalyze): Table[] => {
  const allTables = Object.entries(codeAnalyze)
    .map(([key, value]) => createCLITable({ title: key, rows: normalizeRows(value) }));
  return allTables;
};

export const createCLITables = (allAnalyzes: IAllAnalyzes): Table[] => {
  const allFileAnalyzeTables = createCLIFileAnalyze(allAnalyzes.fileAnalyzes);
  const allCodeAnalyzeTables = createCodeAnalyze(allAnalyzes.codeAnalyzes);

  return [...allFileAnalyzeTables, ...allCodeAnalyzeTables];
};
