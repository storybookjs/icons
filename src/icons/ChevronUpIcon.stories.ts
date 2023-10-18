import type { Meta, StoryObj } from '@storybook/react';

import { ChevronUpIcon } from './ChevronUpIcon';

const meta: Meta<typeof ChevronUpIcon> = {
  component: ChevronUpIcon,
};

export default meta;
type Story = StoryObj<typeof ChevronUpIcon>;

export const Default: Story = { args: { size: 100 } };
