import path from 'path';
import { IAnswers } from '../types/index.js';
import { getDirname } from '../utils/index.js';

export default (answers: IAnswers) => {
  const directoryPath = path.join(getDirname(), 'Documents');
  console.log('directoryPath', directoryPath);
  // fs.readdir();
};
