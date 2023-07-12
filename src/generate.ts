import path from 'path';
import fs from 'fs-extra';
import chalk from 'chalk';
import dotenv from 'dotenv';
import figmaApiExporter from 'figma-api-exporter';
import svgrConfig from '../svgr.config';
import { createIndex, downloadSVGsData, story, toPascalCase } from './utils';

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

// 2. Fetch icons metadata from Figma
console.log(chalk.magentaBright('-> Fetching icons metadata'));
const exporter = figmaApiExporter(FIGMA_API_TOKEN);

exporter
  .getSvgs({
    fileId: FIGMA_FILE_ID,
    canvas: FIGMA_CANVAS,
  })
  .then(async (svgsData) => {
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
      const componentCode = svgr.sync(svgCode, svgrConfig, { componentName });

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

    // 7. Generate index.ts
    console.log(chalk.yellowBright('-> Generating index file'));
    createIndex({
      componentsDirectoryPath: ICONS_DIRECTORY_PATH,
      indexDirectoryPath: INDEX_DIRECTORY_PATH,
      indexFileName: 'index.tsx',
    });

    console.log(chalk.greenBright('-> All done! ✅'));
  })
  .catch((err: unknown) => {
    console.error(err);
    process.exit(1);
  });
