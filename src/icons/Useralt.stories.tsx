import type { Meta, StoryObj } from '@storybook/react';

import { Useralt } from './Useralt';

const meta: Meta<typeof Useralt> = {
  component: Useralt,
};

export default meta;
type Story = StoryObj<typeof Useralt>;

export const Default: Story = { args: { size: 14 } };
