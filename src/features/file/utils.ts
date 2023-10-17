import fs from 'fs';
import { DEFAULT_EXPECT_FILES, DEFAULT_EXPECT_TYPES } from '../../common/constants/index.js';
import { InvalidPathError } from '../../common/errors/index.js';

export const isExceptedByName = (name: string, customExpectNames: string[]): boolean => [...DEFAULT_EXPECT_FILES, ...customExpectNames].includes(name);
export const isExpectedByType = (type: string, customExpectTypes: string[]): boolean => [...DEFAULT_EXPECT_TYPES, ...customExpectTypes].includes(type);

export const checkIsDirectory = (path: string): boolean => {
  try {
    return (fs.statSync(path)).isDirectory();
  } catch (err) {
    throw new InvalidPathError();
  }
};
