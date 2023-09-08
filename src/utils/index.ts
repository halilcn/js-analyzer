import path from 'path';
import { fileURLToPath } from 'url';

export const getDirname = (): string => {
  const fileName = fileURLToPath(import.meta.url);
  const dirname = path.dirname(fileName);

  return dirname;
};

export const a = () => { };
