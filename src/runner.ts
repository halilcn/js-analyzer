// import path from 'path';
import { getAllFilesPath } from './features/file/index.js';
import { IAnswers } from './common/types/index.js';
import { handleFileAnalyze } from './features/file-analyze/index.js';

export default (answers: IAnswers) => {
  const filePathList = getAllFilesPath(answers);

  const fileAnalyze = handleFileAnalyze(filePathList);
  console.log('fileAnalyze', fileAnalyze);
};
