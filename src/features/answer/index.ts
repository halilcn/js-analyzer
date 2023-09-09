import { IAnswers } from '../../common/types/index.js';

export const getAnswers = () => {
  /*
import inquirer from 'inquirer';
import { PROMPT_QUESTIONS } from './constants.ts';

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
    path: '/',
    type: 'none',
    exceptFiles: ['afile', 'bfile', 'afile.js'],
    exceptTypes: [''],
  };

  return dummyAnswers;
};
