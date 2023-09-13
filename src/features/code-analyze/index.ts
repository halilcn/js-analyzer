import path from 'path';
import fs from 'fs';
import { getTotalCommentsLine } from './comments.js';

// boş line sayısı.
// ecmascript veya commonjs.
// todo sayisi
// variable type
// comment satır sayıso

export const handleCodeAnalyze = (files: string[]) => {
  const test = files.reduce((acc: any, item) => {
    const fileContent = fs.readFileSync('/Users/halil/Desktop/others/js-analyzer/src/test.ts', { encoding: 'utf-8' });
    // console.log('fileContent', fileContent.split('\n'));

    console.log('fileContent', fileContent);

    const count = getTotalCommentsLine(fileContent);

    // const { name } = path.parse(item);

    // const namingConventionType = findNamingConvention(name);

    return acc + 1;
  }, 0);

  return test;
};
