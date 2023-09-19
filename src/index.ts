#!/usr/bin/env node

import runner from './runner.js';
import { getAnswers } from './features/answer/index.js';

(async () => {
  try {
    const answers = await getAnswers();
    runner(answers);
  } catch (err) {
    console.log('error var krdşm');
    process.exit();
  }
})();
