import type { Meta, StoryObj } from '@storybook/react';

import { UbuntuIcon } from './UbuntuIcon';

const meta: Meta<typeof UbuntuIcon> = {
  component: UbuntuIcon,
};

export default meta;
type Story = StoryObj<typeof UbuntuIcon>;

export const Default: Story = { args: { size: 100 } };
