export interface IQuestion {
  name: string;
  type: string;
  message: string;
  choices?: string[] | number[];
}
