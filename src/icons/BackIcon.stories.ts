import type { Meta, StoryObj } from '@storybook/react';

import { BackIcon } from './BackIcon';

const meta: Meta<typeof BackIcon> = {
  component: BackIcon,
};

export default meta;
type Story = StoryObj<typeof BackIcon>;

export const Default: Story = { args: { size: 100 } };
