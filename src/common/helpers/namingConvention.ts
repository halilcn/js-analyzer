import { NAMING_CONVENTIONS_REGEX } from '../constants/index.js';
import { NamingConventionEnum } from '../types/index.js';

// it should return a naming convention in any cases
export const findNamingConvention = (name: string): NamingConventionEnum => {
  const namingConvention = Object.keys(NamingConventionEnum)
    .find((convention) => name.match(NAMING_CONVENTIONS_REGEX[convention as NamingConventionEnum]));

  return namingConvention as NamingConventionEnum;
};
