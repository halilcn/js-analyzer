import runner from './runner.js';
import { getAnswers } from './features/answer/index.js';

const answers = getAnswers();
runner(answers);
