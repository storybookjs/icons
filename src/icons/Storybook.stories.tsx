import type { Meta, StoryObj } from '@storybook/react';

import { Storybook } from './Storybook';

const meta: Meta<typeof Storybook> = {
  component: Storybook,
};

export default meta;
type Story = StoryObj<typeof Storybook>;

export const Default: Story = { args: { size: 14 } };
