import { findNamingConvention } from '../../../common/helpers/namingConvention.js';
import { AllNamingConventionsType } from '../../../common/types';
import { VARIABLE_NAME_REGEX } from '../constant.js';

export const getVariablesConventionsAnalyze = (content: string): AllNamingConventionsType => {
  const variableNamingConventions = content
    .split('\n')
    .reduce((acc: AllNamingConventionsType, lineContent) => {
      const match = new RegExp(VARIABLE_NAME_REGEX).exec(lineContent);
      if (!match) return acc;

      const variableName = match[2];
      const namingConvention = findNamingConvention(variableName);

      return {
        ...acc,
        [namingConvention]: (acc[namingConvention] ?? 0) + 1,
      };
    }, {});

  return variableNamingConventions;
};
