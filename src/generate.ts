import path from 'node:path';
import { writeFile, mkdir } from 'node:fs/promises';
import picocolors from 'picocolors';
import dotenv from 'dotenv';
import figmaApiExporter from 'figma-api-exporter';
// eslint-disable-next-line import/no-extraneous-dependencies
import { processFile } from 'figma-transformer';
// eslint-disable-next-line import/no-extraneous-dependencies
import * as Figma from 'figma-js';
import svgrConfig from '../svgr.config';
import { toPascalCase } from './utils/toPascalCase';
import { downloadSVGsData } from './utils/downloadSVGsData';
import { createList } from './utils/createList';
import { story } from './templates/story';
import { createIndex } from './utils/createIndex';

const svgr = require('@svgr/core').default;

const ICONS_DIRECTORY_PATH = path.resolve(__dirname, './icons');
const INDEX_DIRECTORY_PATH = path.resolve(__dirname, './');

// Load environment variables
dotenv.config();

// 1. Retrieve Figma Access Token, File ID and Canvas from .env file
const { FIGMA_API_TOKEN } = process.env;
const { FIGMA_FILE_ID } = process.env;
const { FIGMA_CANVAS } = process.env;

if (
  !FIGMA_API_TOKEN ||
  !FIGMA_FILE_ID ||
  !FIGMA_CANVAS ||
  FIGMA_API_TOKEN === 'NOT SET'
) {
  console.error('Environment Variables not set.');
  process.exit(1);
}

const client = Figma.Client({
  personalAccessToken: FIGMA_API_TOKEN,
});

export const getGroups = async (figmaFileId: string) => {
  try {
    // 2. Fetch icons metadata from Figma
    console.log(picocolors.magentaBright('-> Fetching icons metadata'));
    const exporter = figmaApiExporter(FIGMA_API_TOKEN);

    const svgsData = await exporter.getSvgs({
      fileId: FIGMA_FILE_ID,
      canvas: FIGMA_CANVAS,
    });

    // 3. Download SVG files from Figma
    console.log(picocolors.blueBright('-> Downloading SVG code'));
    const downloadedSVGsData = await downloadSVGsData(svgsData.svgs);

    // 4. Convert SVG to React Components
    console.log(picocolors.cyanBright('-> Converting to React components'));
    for (const svg of downloadedSVGsData) {
      const svgCode = svg.data;
      const componentName = `${toPascalCase(svg.name)}Icon`;
      const componentFileName = `${componentName}.tsx`;
      const storyFileName = `${componentName}.stories.ts`;

      // Converts SVG code into React code using SVGR library
      const componentCode = await svgr(svgCode, svgrConfig, {
        componentName,
      });

      // 5. Write generated component to file system
      await mkdir(ICONS_DIRECTORY_PATH, { recursive: true });
      await writeFile(
        path.resolve(ICONS_DIRECTORY_PATH, componentFileName),
        componentCode
      );

      // 6. Create stories
      await mkdir(ICONS_DIRECTORY_PATH, { recursive: true });
      await writeFile(
        path.resolve(ICONS_DIRECTORY_PATH, storyFileName),
        story(componentName)
      );
    };

    console.log(picocolors.cyanBright('-> Write generated component'));
    console.log(picocolors.yellow('-> Create stories'));

    // 7. Get groups from Figma
    console.log(picocolors.magentaBright('-> Fetching groups'));
    const fileData = await client.file(figmaFileId);
    const processedFile = processFile(fileData.data, figmaFileId);

    // Get all groups
    const groups = processedFile.children[0].children.map(
      (folder: { name: string; shortcuts: { components: any } }) => ({
        name: folder.name,
        components: folder.shortcuts?.components,
      })
    );

    // Filter out groups without components
    const filteredGroups = groups.filter(
      (group: { name: string; components: any }) =>
        group.components !== undefined
    );

    // Get groups with component IDs
    const groupsWithComponents = filteredGroups.map(
      (group: { name: string; components: any }) => ({
        name: group.name,
        components: group.components.map((component: any) => component.id),
      })
    );

    // 8. Generate index.ts
    console.log(picocolors.yellowBright('-> Generating icons file'));
    await createIndex({ downloadedSVGsData, groupsWithComponents });

    // 10. Generate list.ts
    console.log(picocolors.yellowBright('-> Generating list file'));
    await createList({
      groupsWithComponents,
      downloadedSVGsData,
      indexDirectoryPath: INDEX_DIRECTORY_PATH,
    });

    console.log(picocolors.greenBright('-> All done! ✅'));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

getGroups(FIGMA_FILE_ID);
