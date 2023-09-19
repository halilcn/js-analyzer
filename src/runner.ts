import { getAllFilesPath } from './features/file/index.js';
import { IAllAnalyzes, IAnswers } from './common/types/index.js';
import { handleFileAnalyze } from './features/file-analyze/index.js';
import { handleCodeAnalyze } from './features/code-analyze/index.js';
import { createCLITables } from './features/create-cli-table/index.js';
import { createFile } from './features/create-file/index.js';
import { renderTables } from './features/render-table/index.js';

const handleAllAnalyzes = (filePathList: string[]): IAllAnalyzes => {
  const fileAnalyzes = handleFileAnalyze(filePathList);
  const codeAnalyzes = handleCodeAnalyze(filePathList);

  return {
    fileAnalyzes,
    codeAnalyzes,
  };
};

export default (answers: IAnswers) => {
  const filePathList = getAllFilesPath(answers);

  const allAnalyzes = handleAllAnalyzes(filePathList);
  const allCLITables = createCLITables(allAnalyzes);

  renderTables(allCLITables);

  if (answers.requestedFile) {
    // const defaultFileName = `analyze-${new Date().getTime()}`;
    createFile({
      allCLITables,
      fileName: answers?.requestedFileName ? answers.requestedFileName : 'temp-file',
    });
  }
};
