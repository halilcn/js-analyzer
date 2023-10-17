#!/usr/bin/env node

import chalk from 'chalk';
import runner from './runner.js';
import { getAnswers } from './features/answer/index.js';
import log from './common/utils/log.js';
import { CustomError } from './common/errors/custom-error.js';

import 'dotenv/config';

(async () => {
  try {
    const answers = await getAnswers();
    runner(answers);
  } catch (err) {
    const message = err instanceof CustomError ? err.message : 'An error occurred while analyzing';

    log(chalk.red(`Error Message: ${message}`));
    log(chalk.red('Info: The analyzer crashed...'));
    process.exit(1);
  }
})();
