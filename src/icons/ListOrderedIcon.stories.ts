import type { Meta, StoryObj } from '@storybook/react';

import { ListOrderedIcon } from './ListOrderedIcon';

const meta: Meta<typeof ListOrderedIcon> = {
  component: ListOrderedIcon,
};

export default meta;
type Story = StoryObj<typeof ListOrderedIcon>;

export const Default: Story = { args: { size: 100 } };
