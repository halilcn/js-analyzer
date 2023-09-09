import fs from 'fs';
import path from 'path';
import { getCurrentDirectory } from '../../common/utils/index.js';
import { IAnswers } from '../../common/types/index.js';
import { isExceptedByName, isExpectedByType } from './utils.js';
import { IValidFilesPayload } from './types.js';

const getValidAllFilesPath = (payload: IValidFilesPayload, files: string[] = []): string[] => {
  const { targetDirectory, answers } = payload;
  const filesList = fs.readdirSync(targetDirectory);

  filesList.forEach((file) => {
    const fullPath = path.normalize(`${targetDirectory}/${file}`);
    const fileInfo = fs.statSync(fullPath);
    const fileExtname = path.extname(file);

    if (isExceptedByName(file, answers.exceptFiles)) return;
    if (!!fileExtname && isExpectedByType(fileExtname, answers.exceptTypes)) return;

    if (fileInfo.isDirectory()) {
      getValidAllFilesPath({ ...payload, targetDirectory: fullPath }, files);
      return;
    }

    files.push(fullPath);
  });

  return files;
};

export const getAllFilesPath = (answers: IAnswers): string[] => {
  const targetDirectory = path.join(getCurrentDirectory(), answers.path);
  const validAllFilesPath = getValidAllFilesPath({ targetDirectory, answers });

  return validAllFilesPath;
};
