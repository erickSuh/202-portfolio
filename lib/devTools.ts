import fs from 'fs';
import path from 'path';
import { convertCamelCaseToWords } from './utils';

const devToolsDirectory = path.join(process.cwd(), 'pages', 'devTools');

export function getAllDevtoolsData(): { id: string; title: string }[] {
  const fileNames = fs.readdirSync(devToolsDirectory);
  const allDevToolsData = fileNames.map((fileName) => {
    const id = fileName;

    return {
      id,
      title: convertCamelCaseToWords(id),
    };
  });
  return allDevToolsData;
}
