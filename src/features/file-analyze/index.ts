import path from 'path';
import { findNamingConvention } from '../../common/helpers/namingConvention.js';

export const handleFileAnalyze = (files: string[]) => {
  const fileAnalyze = files.reduce((acc: any, item) => {
    const type = path.extname(item);
    const { name } = path.parse(item);

    const namingConventionType = findNamingConvention(name);

    return {
      types: {
        ...acc.types,
        [type]: (acc.types[type] ?? 0) + 1,
      },
      namingConventions: {
        ...acc.namingConventions,
        [namingConventionType]: (acc.namingConventions[namingConventionType] ?? 0) + 1,
      },
    };
  }, { types: {}, namingConventions: {} });

  return {
    ...fileAnalyze,
    totalFile: files.length,
  };
};
