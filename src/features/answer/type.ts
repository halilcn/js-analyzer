import { AnswerEnums, Overwrite } from '../../common/types/index.js';

 type PureAnswerDefaultTypes = { [key in AnswerEnums]: string; };
export type PureAnswers = Overwrite<PureAnswerDefaultTypes, { requestedFile: boolean }>;
