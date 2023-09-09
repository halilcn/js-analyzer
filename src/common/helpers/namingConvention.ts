import { NAMING_CONVENTIONS_REGEX } from '../constants/index.js';
import { NamingConventionEnum } from '../types/index.js';

export const findNamingConvention = (name: string): NamingConventionEnum => {
  const namingConvention = Object.keys(NamingConventionEnum)
    .find((convention: string) => {
      const result = name.match(NAMING_CONVENTIONS_REGEX[convention as NamingConventionEnum]);
      return !!result;
    });

  return namingConvention as NamingConventionEnum;
};
