import type { Meta, StoryObj } from '@storybook/react';

import { ChevronSmallLeftIcon } from './ChevronSmallLeftIcon';

const meta: Meta<typeof ChevronSmallLeftIcon> = {
  component: ChevronSmallLeftIcon,
};

export default meta;
type Story = StoryObj<typeof ChevronSmallLeftIcon>;

export const Default: Story = { args: { size: 100 } };
