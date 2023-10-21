import Table from 'cli-table';
import { IAllAnalyzes, ICodeAnalyze, IFileAnalyze } from '../../common/types/index.js';
import {
  createCLILineCountTable,
  createCLIMultipleRowsCountTable,
  createCLITableTitle,
  normalizeRowsFromObject,
} from './helpers.js';
import { textMapping } from '../../common/table-text-mapping/index.js';

const createFileAnalyze = (fileAnalyzes: IFileAnalyze): Table[] => {
  const { totalFile, ...restOfFileAnalyzes } = fileAnalyzes;

  const tableTitle = createCLITableTitle({ title: 'File Analyzes' });
  const totalFileTable = createCLILineCountTable({ head: ['Total File Count', String(totalFile)] });

  const restOfAnalyzesTables = Object
    .entries(restOfFileAnalyzes)
    .map(([key, value]) => {
      const mappedRows = Object
        .entries(value)
        .reduce((acc, [rowKey, rowValue]) => ({
          ...acc,
          [textMapping(rowKey)]: rowValue,
        }), {});
      const normalizedRows = normalizeRowsFromObject(mappedRows);

      return createCLIMultipleRowsCountTable({
        head: [textMapping(key, `file.${key}`), 'Quantity'],
        rows: normalizedRows,
      });
    });

  return [tableTitle, ...restOfAnalyzesTables, totalFileTable];
};

const createCodeAnalyze = (codeAnalyze: ICodeAnalyze): Table[] => {
  const { totalTodos, totalEmptyLines, ...restOfCodeAnalyzes } = codeAnalyze;

  const tableTitle = createCLITableTitle({ title: 'Code Analyzes' });
  const totalTodosTable = createCLILineCountTable({ head: ['Total Todos Count', String(totalTodos)] });
  const totalEmptyLinesTable = createCLILineCountTable({ head: ['Total Empty Lines Count', String(totalEmptyLines)] });

  const restOfAnalyzesTables = Object
    .entries(restOfCodeAnalyzes)
    .map(([key, value]) => {
      const mappedRows = Object
        .entries(value)
        .reduce((acc, [rowKey, rowValue]) => ({
          ...acc,
          [textMapping(rowKey)]: rowValue,
        }), {});
      const normalizedRows = normalizeRowsFromObject(mappedRows);

      return createCLIMultipleRowsCountTable({
        head: [textMapping(key, `code.${key}`), 'Quantity'],
        rows: normalizedRows,
      });
    });

  return [tableTitle, ...restOfAnalyzesTables, totalTodosTable, totalEmptyLinesTable];
};

export const createCLITables = (allAnalyzes: IAllAnalyzes): Table[] => {
  const allFileAnalyzeTables = createFileAnalyze(allAnalyzes.fileAnalyzes);
  const allCodeAnalyzeTables = createCodeAnalyze(allAnalyzes.codeAnalyzes);

  return [...allFileAnalyzeTables, ...allCodeAnalyzeTables];
};
