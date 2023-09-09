import { IAnswers } from '../../common/types/index.js';

export interface IValidFilesPayload {
  targetDirectory: string
  answers: IAnswers
}
