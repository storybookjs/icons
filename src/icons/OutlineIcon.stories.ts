import type { Meta, StoryObj } from '@storybook/react';

import { OutlineIcon } from './OutlineIcon';

const meta: Meta<typeof OutlineIcon> = {
  component: OutlineIcon,
};

export default meta;
type Story = StoryObj<typeof OutlineIcon>;

export const Default: Story = { args: { size: 100 } };
