#!/usr/bin/env node

import chalk from 'chalk';
import runner from './runner.js';
import { getAnswers } from './features/answer/index.js';
import log from './common/utils/log.js';

import 'dotenv/config';

(async () => {
  try {
    const answers = await getAnswers();
    runner(answers);
  } catch (err) {
    log(chalk.red('The analyzer crashed due to a problem...'));
    process.exit(1);
  }
})();
