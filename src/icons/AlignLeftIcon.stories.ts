import type { Meta, StoryObj } from '@storybook/react';

import { AlignLeftIcon } from './AlignLeftIcon';

const meta: Meta<typeof AlignLeftIcon> = {
  component: AlignLeftIcon,
};

export default meta;
type Story = StoryObj<typeof AlignLeftIcon>;

export const Default: Story = { args: { size: 100 } };
