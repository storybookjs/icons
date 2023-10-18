import type { Meta, StoryObj } from '@storybook/react';

import { GrowIcon } from './GrowIcon';

const meta: Meta<typeof GrowIcon> = {
  component: GrowIcon,
};

export default meta;
type Story = StoryObj<typeof GrowIcon>;

export const Default: Story = { args: { size: 100 } };
