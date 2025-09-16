import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-a11y',
    '@chromatic-com/storybook',
    '@storybook/addon-docs'
  ],
  framework: '@storybook/react-vite',
};

export default config;
