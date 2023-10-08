import { ICommentsCodeAnalyze, ILogsCodeAnalyze, AllNamingConventionsType } from '../../common/types';

export interface IHandleLogsAnalyze {
  fileContent: string
  logs: ILogsCodeAnalyze
}

export interface IHandleGetCommentsAnalyze {
  fileContent: string
  comments: ICommentsCodeAnalyze
}

export interface IHandleGetVariablesConventionsAnalyze {
  fileContent: string
  variablesConventions: AllNamingConventionsType
}
