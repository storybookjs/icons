import type { Meta, StoryObj } from '@storybook/react';

import { Browser } from './Browser';

const meta: Meta<typeof Browser> = {
  component: Browser,
};

export default meta;
type Story = StoryObj<typeof Browser>;

export const Default: Story = { args: { size: 14 } };
