import type { Meta, StoryObj } from '@storybook/react';

import { EllipsisIcon } from './EllipsisIcon';

const meta: Meta<typeof EllipsisIcon> = {
  component: EllipsisIcon,
};

export default meta;
type Story = StoryObj<typeof EllipsisIcon>;

export const Default: Story = { args: { size: 100 } };
