import axios from 'axios';
import os from 'os';
import fs from 'fs-extra';
import path from 'path';

/**
 * Download SVG data from given array of objects containing url
 */
export const downloadSVGsData = async <T extends object>(
  data: ({ url: string } & T)[]
) => {
  return Promise.all(
    data.map(async (dataItem) => {
      const downloadedSvg = await axios.get<string>(dataItem.url);
      return {
        ...dataItem,
        data: downloadedSvg.data,
      };
    })
  );
};

/**
 * Converts string to PascalCase
 */
export const toPascalCase = (str: string) => {
  return `${str}`
    .replace(/[-_]+/g, ' ')
    .replace(/[^\w\s]/g, '')
    .replace(
      /\s+(.)(\w*)/g,
      ($1, $2, $3) => `${$2.toUpperCase() + $3.toLowerCase()}`
    )
    .replace(/\w/, (s) => s.toUpperCase());
};

export const createIndex = ({
  componentsDirectoryPath,
  indexDirectoryPath,
  indexFileName,
}: {
  componentsDirectoryPath: string;
  indexDirectoryPath: string;
  indexFileName: string;
}) => {
  let indexContent = '';
  fs.readdirSync(componentsDirectoryPath).forEach((componentFileName) => {
    // Convert name to pascal case
    const componentName = toPascalCase(
      componentFileName.substr(0, componentFileName.indexOf('.')) ||
        componentFileName
    );

    // Compute relative path from index file to component file
    const relativePathToComponent = path.relative(
      indexDirectoryPath,
      path.resolve(componentsDirectoryPath, componentName)
    );

    // Export statement
    const componentExport = `export { ${componentName} } from './${relativePathToComponent}';`;

    indexContent += componentExport + os.EOL;
  });

  // Write the content to file system
  fs.writeFileSync(
    path.resolve(indexDirectoryPath, indexFileName),
    indexContent
  );
};

export const createIndex2 = ({
  componentsDirectoryPath,
  indexDirectoryPath,
  data,
  indexFileName,
}: {
  componentsDirectoryPath: string;
  indexDirectoryPath: string;
  data: { id: string; name: string; url: string; data: string }[];
  indexFileName: string;
}) => {
  let indexContent = '';
  data.forEach((component) => {
    // Convert name to pascal case
    const componentName = toPascalCase(component.name);

    // Compute relative path from index file to component file
    const relativePathToComponent = path.relative(
      indexDirectoryPath,
      path.resolve(componentsDirectoryPath, componentName)
    );

    // Export statement
    const componentExport = `export { ${componentName} } from './${relativePathToComponent}';`;

    indexContent += componentExport + os.EOL;
  });

  // Write the content to file system
  fs.writeFileSync(
    path.resolve(indexDirectoryPath, indexFileName),
    indexContent
  );
};

export const story = (name: string) => {
  return `import type { Meta, StoryObj } from '@storybook/react';

import { ${name} } from './${name}';

const meta: Meta<typeof ${name}> = {
  component: ${name},
};

export default meta;
type Story = StoryObj<typeof ${name}>;

export const Default: Story = { args: { size: 14 } };
`;
};
