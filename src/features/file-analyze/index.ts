import path from 'path';
import { findNamingConvention } from '../../common/helpers/namingConvention.js';
import { IFileAnalyze, IFileAnalyzeByFileNames } from '../../common/types/index.js';

export const handleFileAnalyze = (files: string[]): IFileAnalyze => {
  const fileAnalyzesByFileNames = files.reduce((acc: IFileAnalyzeByFileNames, item) => {
    const { name } = path.parse(item);
    const type = path.extname(item);
    const namingConventionType = findNamingConvention(name);

    const types = {
      ...acc.types,
      [type]: (acc.types[type] ?? 0) + 1,
    };
    const namingConventions = {
      ...acc.namingConventions,
      [namingConventionType]: (acc.namingConventions[namingConventionType] ?? 0) + 1,
    };

    return {
      types,
      namingConventions,
    };
  }, { types: {}, namingConventions: {} });

  return {
    ...fileAnalyzesByFileNames,
    totalFile: files.length,
  };
};
