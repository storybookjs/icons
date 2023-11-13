import type { Meta, StoryObj } from '@storybook/react';

import { ChevronSmallUpIcon } from './ChevronSmallUpIcon';

const meta: Meta<typeof ChevronSmallUpIcon> = {
  component: ChevronSmallUpIcon,
};

export default meta;
type Story = StoryObj<typeof ChevronSmallUpIcon>;

export const Default: Story = { args: { size: 100 } };
