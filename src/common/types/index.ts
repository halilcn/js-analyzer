export type Overwrite<T, U> = Pick<T, Exclude<keyof T, keyof U>> & U;

export enum AnswerEnums {
  PATH = 'path',
  TYPE = 'type',
  EXCEPT_FILES = 'exceptFiles',
  EXCEPT_EXTENSIONS = 'exceptExtensions',
  REQUESTED_FILE = 'requestedFile',
  REQUESTED_FILE_NAME = 'requestedFileName',
}
export interface IAnswers {
  [AnswerEnums.PATH]: string
  [AnswerEnums.TYPE]: string
  [AnswerEnums.EXCEPT_FILES]: string[]
  [AnswerEnums.EXCEPT_EXTENSIONS]: string[]
  [AnswerEnums.REQUESTED_FILE]: boolean
  [AnswerEnums.REQUESTED_FILE_NAME]?: string
}

export interface IFileAnalyzeByFileNames {
  types: { [key: string]: number; }
  namingConventions: { [key in NamingConventionEnum]?: number; }
}
export interface IFileAnalyze extends IFileAnalyzeByFileNames {
  totalFile: number
}

export interface ICommentsCodeAnalyze {
  blockComments: number
  inlineComments: number
  totalComments: number
}

export interface ILogsCodeAnalyze {
  [key: string]: number
}

export interface ICodeAnalyze {
  comments: ICommentsCodeAnalyze
  logs: ILogsCodeAnalyze
  totalTodos: number
  totalEmptyLines: number
}

export enum NamingConventionEnum {
  CAMEL_CASE = 'CAMEL_CASE',
  PASCAL_CASE = 'PASCAL_CASE',
  SNAKE_CASE = 'SNAKE_CASE',
  KEBAB_CASE = 'KEBAB_CASE',
  UNDEFINED_CASE = 'UNDEFINED_CASE',
}

export interface IAllAnalyzes {
  fileAnalyzes: IFileAnalyze
  codeAnalyzes: ICodeAnalyze
}
