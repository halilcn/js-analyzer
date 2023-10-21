import lodash from 'lodash';
import texts from './texts/index.js';
import customTexts from './texts/custom-texts.js';

export const textMapping = (text: string, target?: string): string => {
  const mappedText = texts[text] || text;

  if (target) return lodash.get(customTexts, target)?.[text] || mappedText;

  return mappedText;
};
