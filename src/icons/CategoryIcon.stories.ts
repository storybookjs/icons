import type { Meta, StoryObj } from '@storybook/react';

import { CategoryIcon } from './CategoryIcon';

const meta: Meta<typeof CategoryIcon> = {
  component: CategoryIcon,
};

export default meta;
type Story = StoryObj<typeof CategoryIcon>;

export const Default: Story = { args: { size: 100 } };
