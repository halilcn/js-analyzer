import dayjs from 'dayjs';
import { getAllFilesPath } from './features/file/index.js';
import { IAllAnalyzes, IAnswers } from './common/types/index.js';
import { handleFileAnalyze } from './features/file-analyze/index.js';
import { handleCodeAnalyze } from './features/code-analyze/index.js';
import { createCLITables } from './features/create-cli-table/index.js';
import { createFile } from './features/create-file/index.js';
import { renderTables } from './features/render-table/index.js';
import { isDevEnv } from './common/utils/index.js';
import { renderCompletedAnalyzeInfo, renderStartedToComputerAnalyzesInfo } from './features/render-info/index.js';

const handleAllAnalyzes = (filePathList: string[]): IAllAnalyzes => {
  const fileAnalyzes = handleFileAnalyze(filePathList);
  const codeAnalyzes = handleCodeAnalyze(filePathList);

  return {
    fileAnalyzes,
    codeAnalyzes,
  };
};

export default (answers: IAnswers) => {
  renderStartedToComputerAnalyzesInfo();

  const startTime = dayjs().format();

  const filePathList = getAllFilesPath(answers);

  const allAnalyzes = handleAllAnalyzes(filePathList);
  const allCLITables = createCLITables(allAnalyzes);

  renderTables(allCLITables);
  renderCompletedAnalyzeInfo({ startTime });

  if (answers.requestedFile) {
    createFile({
      allCLITables,
      fileName: isDevEnv() ? 'dev-analyze' : answers?.requestedFileName,
    });
  }
};
