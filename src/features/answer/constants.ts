import { QuestionCollection } from 'inquirer';
import chalk from 'chalk';
import { AnswerEnums } from '../../common/types/index.js';

export const PROMPT_QUESTIONS: QuestionCollection = [
  {
    name: AnswerEnums.PATH,
    type: 'input',
    message: `${chalk.white('What is the directory you want to analyze?')}${chalk.gray('(If it is the current directory, you can pass)')}`,
  },
  {
    name: AnswerEnums.TYPE,
    type: 'list',
    message: chalk.white('Which framework does the project you want to analyze use?'),
    choices: ['react', 'other'],
  },
  {
    name: AnswerEnums.EXCEPT_FILES,
    type: 'input',
    message: `${chalk.white('Are there files or directories you want to ignore?')}${chalk.gray('(You should write them like "custom-folder, custom-file.js, ...")')}`,
  },
  {
    name: AnswerEnums.EXCEPT_EXTENSIONS,
    type: 'input',
    message: `${chalk.white('Are there any file extensions you want to ignore? ')}${chalk.gray('(You should write them like ".json, .txt, ...")')}`,
  },
  {
    name: AnswerEnums.REQUESTED_FILE,
    type: 'confirm',
    message: chalk.white('Do you want to get a text file that includes all analysis?'),
  },
  {
    name: AnswerEnums.REQUESTED_FILE_NAME,
    type: 'input',
    message: `${chalk.white('Do you have a special analyze file name?')}${chalk.gray('(If not, you can pass)')}`,
    when: (answers) => answers[AnswerEnums.REQUESTED_FILE],
  },
];
