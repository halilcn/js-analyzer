import { ICommentsCodeAnalyze, ILogsCodeAnalyze } from '../../common/types';

export interface IHandleLogsAnalyze {
  fileContent: string
  logs: ILogsCodeAnalyze
}

export interface IHandleGetCommentsAnalyze {
  fileContent: string
  comments: ICommentsCodeAnalyze
}
