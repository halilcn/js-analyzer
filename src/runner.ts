// import path from 'path';
import { getAllFilesPath } from './features/file/index.js';
import { IAnswers } from './common/types/index.js';

export default (answers: IAnswers) => {
  const filePathList = getAllFilesPath(answers);
  // const directoryPath = path.join(getDirname(), 'Documents');
  // console.log('directoryPath', directoryPath);
  // fs.readdir();
};
