import os from 'os';
import fs from 'fs-extra';
import path from 'path';
import { toPascalCase } from './toPascalCase';

interface createIndexProps {
  downloadedSVGsData: { id: string; name: string; url: string; data: string }[];
  groupsWithComponents: { name: string; components: any }[];
}

export const createIndex = ({ downloadedSVGsData }: createIndexProps) => {
  let indexContent = '';

  const imports = `export { iconList } from './iconList';`;
  indexContent += imports + os.EOL + os.EOL;

  downloadedSVGsData.forEach((component) => {
    // Convert name to pascal case
    const componentName = `${toPascalCase(component.name)}Icon`;

    // Export statement
    const componentExport = `export { ${componentName} } from './icons/${componentName}';`;

    indexContent += componentExport + os.EOL;
  });

  // Write the content to file system
  fs.writeFileSync(path.resolve('./src', 'index.ts'), indexContent);
};
