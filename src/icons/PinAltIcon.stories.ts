import type { Meta, StoryObj } from '@storybook/react';

import { PinAltIcon } from './PinAltIcon';

const meta: Meta<typeof PinAltIcon> = {
  component: PinAltIcon,
};

export default meta;
type Story = StoryObj<typeof PinAltIcon>;

export const Default: Story = { args: { size: 100 } };
