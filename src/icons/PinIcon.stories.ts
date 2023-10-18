import type { Meta, StoryObj } from '@storybook/react';

import { PinIcon } from './PinIcon';

const meta: Meta<typeof PinIcon> = {
  component: PinIcon,
};

export default meta;
type Story = StoryObj<typeof PinIcon>;

export const Default: Story = { args: { size: 100 } };
