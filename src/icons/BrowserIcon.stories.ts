import type { Meta, StoryObj } from '@storybook/react';

import { BrowserIcon } from './BrowserIcon';

const meta: Meta<typeof BrowserIcon> = {
  component: BrowserIcon,
};

export default meta;
type Story = StoryObj<typeof BrowserIcon>;

export const Default: Story = { args: { size: 100 } };
