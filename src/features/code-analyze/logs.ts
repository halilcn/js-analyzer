import { ILogsCodeAnalyze } from '../../common/types';
import { LOG_REGEX } from './constant.js';

export const getLogsAnalyze = (content: string): ILogsCodeAnalyze => {
  const allLogsTypes: string[] = [];
  content.replace(LOG_REGEX, (matchedLog) => {
    allLogsTypes.push(matchedLog.split('.')[1].split('(')[0]);
    return '';
  });

  return allLogsTypes.reduce((acc: ILogsCodeAnalyze, logType) => ({
    ...acc,
    [logType]: (acc[logType] ?? 0) + 1,
  }), {});
};
