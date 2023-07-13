import path from 'path';
import fs from 'fs-extra';
import chalk from 'chalk';
import dotenv from 'dotenv';
import figmaApiExporter from 'figma-api-exporter';
// eslint-disable-next-line import/no-extraneous-dependencies
import { processFile } from 'figma-transformer';
// eslint-disable-next-line import/no-extraneous-dependencies
import * as Figma from 'figma-js';
import svgrConfig from '../svgr.config';
import { createIndex, downloadSVGsData, story, toPascalCase } from './utils';

const svgr = require('@svgr/core').default;

const ICONS_DIRECTORY_PATH = path.resolve(__dirname, './icons');
const INDEX_DIRECTORY_PATH = path.resolve(__dirname, './');
const EXPORTS_DIRECTORY_PATH = path.resolve(__dirname, './exports');

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
    console.log(chalk.magentaBright('-> Fetching icons metadata'));
    const exporter = figmaApiExporter(FIGMA_API_TOKEN);

    const svgsData = await exporter.getSvgs({
      fileId: FIGMA_FILE_ID,
      canvas: FIGMA_CANVAS,
    });

    // 3. Download SVG files from Figma
    console.log(chalk.blueBright('-> Downloading SVG code'));
    const downloadedSVGsData = await downloadSVGsData(svgsData.svgs);

    // 4. Convert SVG to React Components
    console.log(chalk.cyanBright('-> Converting to React components'));
    downloadedSVGsData.forEach((svg) => {
      const svgCode = svg.data;
      const componentName = toPascalCase(svg.name);
      const componentFileName = `${componentName}.tsx`;
      const storyFileName = `${componentName}.stories.tsx`;

      // Converts SVG code into React code using SVGR library
      const componentCode = svgr.sync(svgCode, svgrConfig, {
        componentName,
      });

      // 5. Write generated component to file system
      fs.ensureDirSync(ICONS_DIRECTORY_PATH);
      fs.outputFileSync(
        path.resolve(ICONS_DIRECTORY_PATH, componentFileName),
        componentCode
      );

      // 6. Create stories
      fs.ensureDirSync(ICONS_DIRECTORY_PATH);
      fs.outputFileSync(
        path.resolve(ICONS_DIRECTORY_PATH, storyFileName),
        story(componentName)
      );
    });

    console.log(chalk.cyanBright('-> Write generated component'));
    console.log(chalk.yellow('-> Create stories'));

    // 7. Get groups from Figma
    console.log(chalk.magentaBright('-> Fetching groups'));
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

    // console.log(downloadedSVGsData);
    // console.log(groupsWithComponents);

    // 8. Generate group files
    groupsWithComponents.forEach((group: { name: string; components: any }) => {
      const groupName = toPascalCase(group.name);
      const data = downloadedSVGsData.filter((svg) => {
        return group.components.includes(svg.id);
      });
      createIndex({
        componentsDirectoryPath: ICONS_DIRECTORY_PATH,
        indexDirectoryPath: EXPORTS_DIRECTORY_PATH,
        data,
        indexFileName: `${groupName}.tsx`,
      });
    });

    // 9. Generate index.ts
    console.log(chalk.yellowBright('-> Generating index file'));
    createIndex({
      componentsDirectoryPath: ICONS_DIRECTORY_PATH,
      indexDirectoryPath: INDEX_DIRECTORY_PATH,
      data: downloadedSVGsData,
      indexFileName: 'index.ts',
    });

    console.log(chalk.greenBright('-> All done! ✅'));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

getGroups(FIGMA_FILE_ID);
