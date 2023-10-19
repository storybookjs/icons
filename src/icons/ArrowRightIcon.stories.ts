import type { Meta, StoryObj } from '@storybook/react';

import { ArrowRightIcon } from './ArrowRightIcon';

const meta: Meta<typeof ArrowRightIcon> = {
  component: ArrowRightIcon,
};

export default meta;
type Story = StoryObj<typeof ArrowRightIcon>;

export const Default: Story = { args: { size: 100 } };
