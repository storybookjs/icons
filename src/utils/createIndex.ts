import os from 'os';
import fs from 'fs-extra';
import path from 'path';
import { toPascalCase } from './toPascalCase';

interface createIndexProps {
  downloadedSVGsData: { id: string; name: string; url: string; data: string }[];
  groupsWithComponents: { name: string; components: any }[];
}

export const createIndex = ({
  downloadedSVGsData,
  groupsWithComponents,
}: createIndexProps) => {
  let indexContent = '';

  const listWithGroup = downloadedSVGsData.map((svg) => {
    const findGroup = groupsWithComponents.find((group) =>
      group.components.includes(svg.id)
    );
    const groupName = findGroup?.name;
    return {
      ...svg,
      groupName,
    };
  });

  const imports = `import { lazy } from 'react';`;
  indexContent += imports + os.EOL + os.EOL;

  listWithGroup.forEach((component) => {
    // Convert name to pascal case
    const componentName = toPascalCase(component.name);

    // Export statement
    const componentExport = `export const ${componentName} = lazy(async () => {
  const m = await import('./groups/${component.groupName}');
  return { default: m.${componentName} };
});`;

    indexContent += componentExport + os.EOL;
  });

  // Write the content to file system
  fs.writeFileSync(path.resolve('./src', 'index.ts'), indexContent);
};
