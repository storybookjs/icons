import type { Meta, StoryObj } from '@storybook/react';

import { AlignRightIcon } from './AlignRightIcon';

const meta: Meta<typeof AlignRightIcon> = {
  component: AlignRightIcon,
};

export default meta;
type Story = StoryObj<typeof AlignRightIcon>;

export const Default: Story = { args: { size: 100 } };
