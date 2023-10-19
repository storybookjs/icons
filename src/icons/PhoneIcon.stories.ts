import type { Meta, StoryObj } from '@storybook/react';

import { PhoneIcon } from './PhoneIcon';

const meta: Meta<typeof PhoneIcon> = {
  component: PhoneIcon,
};

export default meta;
type Story = StoryObj<typeof PhoneIcon>;

export const Default: Story = { args: { size: 100 } };
