import type { Meta, StoryObj } from '@storybook/react';

import { FilterIcon } from './FilterIcon';

const meta: Meta<typeof FilterIcon> = {
  component: FilterIcon,
};

export default meta;
type Story = StoryObj<typeof FilterIcon>;

export const Default: Story = { args: { size: 100 } };
