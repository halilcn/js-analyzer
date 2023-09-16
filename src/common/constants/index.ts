// import { IQuestion } from '../types';

import { NamingConventionEnum } from '../types/index.js';

export const DEFAULT_EXPECT_FILES = ['node_modules', 'dist', 'package.json', 'package-lock.json', '.git'];
export const DEFAULT_EXPECT_TYPES = [''];

export const NAMING_CONVENTIONS_REGEX = {
  [NamingConventionEnum.KEBAB_CASE]: /^[a-z][a-z0-9-]*$/,
  [NamingConventionEnum.PASCAL_CASE]: /^[A-Z][a-zA-Z0-9]*$/,
  [NamingConventionEnum.CAMEL_CASE]: /^[a-z][a-zA-Z0-9]*$/,
  [NamingConventionEnum.SNAKE_CASE]: /^[a-z][a-z0-9_]*$/,
  [NamingConventionEnum.UNDEFINED_CASE]: /^.*$/,
};

export const DEFAULT_PATH = '/';
