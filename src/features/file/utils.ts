import { DEFAULT_EXPECT_FILES, DEFAULT_EXPECT_TYPES } from '../../common/constants/index.js';

export const isExceptedByName = (name: string, customExpectNames: string[]):boolean => [...DEFAULT_EXPECT_FILES, ...customExpectNames].includes(name);
export const isExpectedByType = (type: string, customExpectTypes: string[]):boolean => [...DEFAULT_EXPECT_TYPES, ...customExpectTypes].includes(type);
