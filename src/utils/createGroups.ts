import { toPascalCase } from './toPascalCase';
import os from 'os';
import fs from 'fs-extra';
import path from 'path';

export const createGroups = ({
  componentsDirectoryPath,
  groupsDirectoryPath,
  data,
  indexFileName,
}: {
  componentsDirectoryPath: string;
  groupsDirectoryPath: string;
  data: { id: string; name: string; url: string; data: string }[];
  indexFileName: string;
}) => {
  let indexContent = '';

  data.forEach((component) => {
    // Convert name to pascal case
    const componentName = toPascalCase(component.name);

    // Compute relative path from index file to component file
    const relativePathToComponent = path.relative(
      groupsDirectoryPath,
      path.resolve(componentsDirectoryPath, componentName)
    );

    // Export statement
    const componentExport = `export { ${componentName} } from './${relativePathToComponent}';`;

    indexContent += componentExport + os.EOL;
  });

  // Write the content to file system
  fs.writeFileSync(
    path.resolve(groupsDirectoryPath, indexFileName),
    indexContent
  );
};
