import os from 'os';
import fs from 'fs-extra';
import path from 'path';
import { toPascalCase } from './toPascalCase';

export const createList = ({
  groupsWithComponents,
  downloadedSVGsData,
  indexDirectoryPath,
}: {
  groupsWithComponents: any;
  downloadedSVGsData: any;
  indexDirectoryPath: string;
}) => {
  let listContent = `export const iconList = [` + os.EOL;
  const groupWithComponentsNames = groupsWithComponents.map(
    (group: { name: any; components: any[] }) => ({
      name: group.name,
      components: group.components.map((component: any) => {
        const findComponent = downloadedSVGsData.find(
          (svg: { id: any }) => svg.id === component
        );
        const name = findComponent?.name;
        const componentName = toPascalCase(name || '');
        return componentName;
      }),
    })
  );

  groupWithComponentsNames.forEach(
    (group: { name: any; components: any[] }) => {
      listContent += `  {
    name: '${group.name}',
    icons: [
`;
      group.components.forEach((component: any) => {
        listContent += `      '${component}',` + os.EOL;
      });

      listContent += `    ]
  },
`;
    }
  );

  listContent += '];' + os.EOL;

  // console.log(listContent);

  // Write the content to file system
  fs.writeFileSync(
    path.resolve(indexDirectoryPath, 'iconList.tsx'),
    listContent
  );
};
