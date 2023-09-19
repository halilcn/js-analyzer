import inquirer from 'inquirer';
import chalk from 'chalk';
import { PROMPT_QUESTIONS } from './constants.js';
import { normalizeAnswers } from './utils.js';
import { PureAnswers } from './type.js';
import log from '../../common/utils/log.js';

export const getAnswers = async () => {
  log(chalk.blue('Welcome to JS Analyzer! You can get the outcome of analysis after answering the following questions. \n'));

  const answers = await inquirer.prompt(PROMPT_QUESTIONS) as PureAnswers;
  const normalizedAnswers = normalizeAnswers(answers);

  return normalizedAnswers;
};
