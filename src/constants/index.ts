// import { IQuestion } from '../types';

export const PROMPT_QUESTIONS = [
  {
    name: 'src',
    type: 'input',
    message: 'What is the source you want to analyze?',
  },
  {
    name: 'type',
    type: 'list',
    message:
      'Which framework or technology the project you want to analyze use?',
    choices: ['React', 'None'],
  },
  /*
    {
    name: 'REPORT_TYPES',
    type: 'checkbox',
    message: 'What type of report would you like to generate?',
    choices: ['Text', 'HTML'],
  },

  */
];

export const test = '';
