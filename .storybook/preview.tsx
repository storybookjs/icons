import type { Preview } from '@storybook/react';
import { loadFontsForStorybook } from '@storybook/design-system';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#fff' },
        { name: 'dark', value: '#171C23' },
      ],
    },
    viewport: {
      viewports: {
        xsm: { name: 'XSmall', styles: { width: '320px', height: '100%' } },
        sm: { name: 'Small', styles: { width: '640px', height: '100%' } },
        md: { name: 'Medium', styles: { width: '768px', height: '100%' } },
        lg: { name: 'Large', styles: { width: '1024px', height: '100%' } },
        xl: { name: 'XL', styles: { width: '1280px', height: '100%' } },
        '2xl': { name: '2XL', styles: { width: '1536px', height: '100%' } },
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

loadFontsForStorybook();

export default preview;
