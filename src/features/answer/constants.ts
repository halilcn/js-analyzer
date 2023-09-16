import { AnswerEnums } from '../../common/types/index.js';
import { IQuestion } from './type.js';

export const PROMPT_QUESTIONS: IQuestion[] = [
  {
    name: AnswerEnums.PATH,
    type: 'input',
    message: 'What is the directory you want to analyze? (If it is the current directory, you can pass)',
  },
  {
    name: AnswerEnums.TYPE,
    type: 'list',
    message: 'Which framework does the project you want to analyze use?',
    choices: ['react', 'none'],
  },
  {
    name: AnswerEnums.EXCEPT_FILES,
    type: 'input',
    message: 'Are there any files or directory names you want to except? (You should write them like "custom-folder, custom-file.js, ...")',
  },
  {
    name: AnswerEnums.EXCEPT_EXTENSIONS,
    type: 'input',
    message: 'Are there any file extensions you want to except? (You should write them like ".json, .txt, ...")',
  },
];
