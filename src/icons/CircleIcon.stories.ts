import type { Meta, StoryObj } from '@storybook/react';

import { CircleIcon } from './CircleIcon';

const meta: Meta<typeof CircleIcon> = {
  component: CircleIcon,
};

export default meta;
type Story = StoryObj<typeof CircleIcon>;

export const Default: Story = { args: { size: 100 } };
