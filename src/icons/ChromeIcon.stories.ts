import type { Meta, StoryObj } from '@storybook/react';

import { ChromeIcon } from './ChromeIcon';

const meta: Meta<typeof ChromeIcon> = {
  component: ChromeIcon,
};

export default meta;
type Story = StoryObj<typeof ChromeIcon>;

export const Default: Story = { args: { size: 100 } };
