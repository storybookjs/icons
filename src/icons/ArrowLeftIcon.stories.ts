import type { Meta, StoryObj } from '@storybook/react';

import { ArrowLeftIcon } from './ArrowLeftIcon';

const meta: Meta<typeof ArrowLeftIcon> = {
  component: ArrowLeftIcon,
};

export default meta;
type Story = StoryObj<typeof ArrowLeftIcon>;

export const Default: Story = { args: { size: 100 } };
