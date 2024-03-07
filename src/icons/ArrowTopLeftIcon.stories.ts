import type { Meta, StoryObj } from '@storybook/react';

import { ArrowTopLeftIcon } from './ArrowTopLeftIcon';

const meta: Meta<typeof ArrowTopLeftIcon> = {
  component: ArrowTopLeftIcon,
};

export default meta;
type Story = StoryObj<typeof ArrowTopLeftIcon>;

export const Default: Story = { args: { size: 100 } };
