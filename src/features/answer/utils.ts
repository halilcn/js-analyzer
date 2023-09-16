import { DEFAULT_PATH } from '../../common/constants/index.js';
import { AnswerEnums, IAnswers } from '../../common/types/index.js';
import { PureAnswers } from './type.js';

export const normalizeAnswers = (answers: PureAnswers): IAnswers => {
  const preparedPath = answers[AnswerEnums.PATH] ? answers[AnswerEnums.PATH] : DEFAULT_PATH;
  const preparedExceptFiles = answers[AnswerEnums.EXCEPT_FILES]
    .split(',')
    .filter((name) => Boolean(name))
    .map((file) => file.trim());
  const preparedExceptExtensions = answers[AnswerEnums.EXCEPT_EXTENSIONS]
    .split(',')
    .filter((name) => Boolean(name))
    .map((name) => ((name.includes('.') ? name : `.${name}`)).trim());

  return {
    ...answers,
    [AnswerEnums.PATH]: preparedPath,
    [AnswerEnums.EXCEPT_FILES]: preparedExceptFiles,
    [AnswerEnums.EXCEPT_EXTENSIONS]: preparedExceptExtensions,
  };
};
