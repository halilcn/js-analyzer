import dayjs from 'dayjs';
import chalk from 'chalk';
import { IRenderCompletedAnalyzeInfo } from './types.js';

export const renderCompletedAnalyzeInfo = (info: IRenderCompletedAnalyzeInfo) => {
  const { startTime } = info;
  const endTime = dayjs();

  const differenceTimeAsMinutes = endTime
    .diff(dayjs(startTime), 'minutes', true)
    .toFixed(4);

  console.log(chalk.green(`\nAll analyses were completed in ${differenceTimeAsMinutes} minutes.`));
};

export const renderStartedToComputerAnalyzesInfo = () => {
  console.log(chalk.yellow('\nStarted to analyze all the files...'));
};
