export interface IQuestion {
  name: string;
  type: string;
  message: string;
  choices?: string[] | number[];
}

export interface IAnswers {
  src: string
  type: string
  excepts: string[]
}
