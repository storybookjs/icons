import type { Meta, StoryObj } from '@storybook/react';

import { ExpandAltIcon } from './ExpandAltIcon';

const meta: Meta<typeof ExpandAltIcon> = {
  component: ExpandAltIcon,
};

export default meta;
type Story = StoryObj<typeof ExpandAltIcon>;

export const Default: Story = { args: { size: 100 } };
