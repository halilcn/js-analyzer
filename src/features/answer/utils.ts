import { AnswerEnums, IAnswers } from '../../common/types/index.js';
import { PureAnswers } from './type.js';

export const normalizeAnswers = (answers: PureAnswers): IAnswers => ({
  [AnswerEnums.PATH]: PureAnswers[AnswerEnums.PATH] ? '' : '',
});
