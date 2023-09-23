import fs from 'fs';
import { ICreateFile } from './types.js';
import { normalizeTableContent } from './helpers.js';

export const createFile = ({ allCLITables, fileName }: ICreateFile) => {
  const preparedFileName = fileName || `analyze-${new Date().getTime()}`;
  const fullFileName = `${preparedFileName}.txt`;
  const allTableContent = allCLITables.map((table) => normalizeTableContent(table.toString())).join('\n\n');

  fs.writeFileSync(fullFileName, allTableContent, 'utf8');
};
