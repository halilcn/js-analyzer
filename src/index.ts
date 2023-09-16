import runner from './runner.js';
import { getAnswers } from './features/answer/index.js';

(async () => {
  const answers = await getAnswers();
  // runner(answers);
})();
