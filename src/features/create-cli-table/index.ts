import Table from 'cli-table';
import { IAllAnalyzes, IFileAnalyze } from '../../common/types/index.js';
import { ICreateTable } from './types.js';
import { normalizeRows } from './helpers.js';

const createCLITable = (tableInfo: ICreateTable) => {
  const { title, rows } = tableInfo;

  const table = new Table({ head: [title] });
  table.push(...rows);

  return table;
};

const createCLIFileAnalyze = (fileAnalyze: IFileAnalyze): any[] => {
  const allTables = Object.entries(fileAnalyze)
    .map(([key, value]) => createCLITable({ title: key, rows: normalizeRows(value) }));
  return allTables;
};

export const createCLITables = (allAnalyzes: IAllAnalyzes): any[] => {
  const allFileAnalyzeTables = createCLIFileAnalyze(allAnalyzes.fileAnalyze);

  return [...allFileAnalyzeTables];
};
