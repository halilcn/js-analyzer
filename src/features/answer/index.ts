import inquirer from 'inquirer';
import { IAnswers } from '../../common/types/index.js';
import { PROMPT_QUESTIONS } from './constants.js';
import { normalizeAnswers } from './utils.js';
import { PureAnswers } from './type.js';

export const getAnswers = async () => {
  try {
    const answers = await inquirer.prompt(PROMPT_QUESTIONS) as PureAnswers;
    const normalizedAnswers = normalizeAnswers(answers);

    console.log('answers', answers);
    console.log('normalizedAnswers', normalizedAnswers);

    return answers;
    process.exit();
  } catch (err) {
    console.log('err', err);
    process.exit();
  }
};
