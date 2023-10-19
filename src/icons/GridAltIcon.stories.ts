import type { Meta, StoryObj } from '@storybook/react';

import { GridAltIcon } from './GridAltIcon';

const meta: Meta<typeof GridAltIcon> = {
  component: GridAltIcon,
};

export default meta;
type Story = StoryObj<typeof GridAltIcon>;

export const Default: Story = { args: { size: 100 } };
