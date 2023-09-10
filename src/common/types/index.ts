export interface IAnswers {
  path: string
  type: string
  exceptFiles: string[]
  exceptTypes: string[]
}

export interface IFileAnalyze {
  types: object
  namingConventions: object
  totalFile: number
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
}
