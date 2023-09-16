// import path from 'path';
import { getAllFilesPath } from './features/file/index.js';
import { IAnswers } from './common/types/index.js';
import { handleFileAnalyze } from './features/file-analyze/index.js';
import { handleCodeAnalyze } from './features/code-analyze/index.js';
import { createCLITables } from './features/create-cli-table/index.js';
import { createFile } from './features/create-file/index.js';
import { renderTables } from './features/render-table/index.js';

export default (answers: IAnswers) => {
  const filePathList = getAllFilesPath(answers);

  const fileAnalyze = handleFileAnalyze(filePathList);
  const codeAnalyze = handleCodeAnalyze(filePathList);

  const allCLITables = createCLITables({ fileAnalyze, codeAnalyze });
  renderTables(allCLITables);

  if (answers.requestedFile) {
    // const defaultFileName = `analyze-${new Date().getTime()}`;
    createFile({
      allCLITables,
      fileName: answers?.requestedFileName ? answers.requestedFileName : 'temp-file',
    });
  }
};
