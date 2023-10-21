import Table from 'cli-table';
import chalk from 'chalk';
import {
  ICreateLineCountTable, ICreateMultipleRowsCountTable, ICreateTableTitle,
} from './types';
import { textMapping } from '../../common/table-text-mapping/index.js';

export const createCLIMultipleRowsCountTable = (tableInfo: ICreateMultipleRowsCountTable): Table => {
  const { head, rows, ...otherOptions } = tableInfo;

  const table = new Table({ head, ...otherOptions });
  table.push(...rows);

  return table;
};

export const createCLILineCountTable = (tableInfo: ICreateLineCountTable): Table => {
  const { head, ...otherOptions } = tableInfo;

  const [title, value] = head;
  const table = new Table({ head: [title, chalk.white(value)], ...otherOptions });

  return table;
};

export const createCLITableTitle = (tableInfo: ICreateTableTitle): Table => {
  const { title, ...otherOptions } = tableInfo;

  const table = new Table({ head: [chalk.blue(title)], ...otherOptions });

  return table;
};

export const normalizeRowsFromObject = (data: object): object[] => Object.entries(data)
  .reduce((acc: object[], [key, value]) => ([...acc, { [key]: value }]), []);
