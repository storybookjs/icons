import type { Meta, StoryObj } from '@storybook/react';

import { Bottombar } from './Bottombar';

const meta: Meta<typeof Bottombar> = {
  component: Bottombar,
};

export default meta;
type Story = StoryObj<typeof Bottombar>;

export const Default: Story = { args: { size: 14 } };
