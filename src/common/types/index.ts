export enum AnswerEnums {
  PATH = 'path',
  TYPE = 'type',
  EXCEPT_FILES = 'exceptFiles',
  EXCEPT_EXTENSIONS = 'exceptExtensions',
}
export interface IAnswers {
  [AnswerEnums.PATH]: string
  type: string
  exceptFiles: string[]
  exceptExtensions: string[]
}

export interface IFileAnalyze {
  types: object
  namingConventions: object
  totalFile: number
}

export interface ICommentsCodeAnalyze {
  blockComments: number
  inlineComments: number
  totalComments: number
}

export interface ITodosAnalyze {
  totalTodos: number
}

export interface ICodeAnalyze {
  comments: ICommentsCodeAnalyze
  todos: ITodosAnalyze
}

export enum NamingConventionEnum {
  CAMEL_CASE = 'CAMEL_CASE',
  PASCAL_CASE = 'PASCAL_CASE',
  SNAKE_CASE = 'SNAKE_CASE',
  KEBAB_CASE = 'KEBAB_CASE',
  UNDEFINED_CASE = 'UNDEFINED_CASE',
}

export interface IAllAnalyzes {
  fileAnalyze: IFileAnalyze
  codeAnalyze: ICodeAnalyze
}
