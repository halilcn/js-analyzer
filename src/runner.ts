// import path from 'path';
import { getAllFilesPath } from './features/file/index.js';
import { IAnswers } from './common/types/index.js';
import { handleFileAnalyze } from './features/file-analyze/index.js';
import { createCLITables } from './features/create-cli-table/index.js';

export default (answers: IAnswers) => {
  const filePathList = getAllFilesPath(answers);

  const fileAnalyze = handleFileAnalyze(filePathList);

  const allCLITables = createCLITables({ fileAnalyze });

  allCLITables.forEach((table) => {
    console.log(table.toString());
  });
};
