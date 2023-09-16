import { AnswerEnums } from '../../common/types/index.js';

export interface IQuestion {
  name: string;
  type: string;
  message: string;
  choices?: string[] | number[];
}

export type PureAnswers = {
  [key in AnswerEnums]: string;
};
