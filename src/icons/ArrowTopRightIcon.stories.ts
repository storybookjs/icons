import type { Meta, StoryObj } from '@storybook/react';

import { ArrowTopRightIcon } from './ArrowTopRightIcon';

const meta: Meta<typeof ArrowTopRightIcon> = {
  component: ArrowTopRightIcon,
};

export default meta;
type Story = StoryObj<typeof ArrowTopRightIcon>;

export const Default: Story = { args: { size: 100 } };
