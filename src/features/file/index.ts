import fs from 'fs';
import path from 'path';
import { getCurrentDirectory } from '../../common/utils/index.js';
import { IAnswers } from '../../common/types/index.js';
import { checkIsDirectory, isExceptedByName, isExpectedByType } from './utils.js';
import { IValidFilesPayload } from './types.js';
import { CustomMessageError, FileFeatureError, InvalidPathError } from '../../common/errors/index.js';

const getValidAllFilesPath = (payload: IValidFilesPayload, files: string[] = []): string[] => {
  const { targetDirectory, answers } = payload;
  const filesList = fs.readdirSync(targetDirectory);

  filesList.forEach((file) => {
    const fullPath = path.normalize(`${targetDirectory}/${file}`);
    const fileInfo = fs.statSync(fullPath);
    const fileExtname = path.extname(file);

    if (isExceptedByName(file, answers.exceptFiles)) return;
    if (!!fileExtname && isExpectedByType(fileExtname, answers.exceptExtensions)) return;

    if (fileInfo.isDirectory()) {
      getValidAllFilesPath({ ...payload, targetDirectory: fullPath }, files);
      return;
    }

    files.push(fullPath);
  });

  return files;
};

export const getAllFilesPath = (answers: IAnswers): string[] => {
  try {
    const fullPath = path.join(getCurrentDirectory(), answers.path);
    const isDirectory = checkIsDirectory(fullPath);

    return isDirectory
      ? getValidAllFilesPath({
        targetDirectory: fullPath,
        answers,
      })
      : [fullPath];
  } catch (err: any) {
    if (err instanceof InvalidPathError) {
      throw new CustomMessageError('The path does not has any files or folders to analyze. Please write a valid path.');
    }

    throw new FileFeatureError();
  }
};
