import runner from './runner/index.js';
import { IAnswers } from './types/index.js';
/*
import inquirer from 'inquirer';
import { PROMPT_QUESTIONS } from './constants/index.js';

inquirer
  .prompt(PROMPT_QUESTIONS)
  .then((answers) => {
    console.log('answer', answers);
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

*/

const dummyAnswers: IAnswers = {
  src: '../../tracking-earthquakes',
  type: 'none',
  excepts: ['a', 'b'],
};

runner(dummyAnswers);
