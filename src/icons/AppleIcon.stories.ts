import type { Meta, StoryObj } from '@storybook/react';

import { AppleIcon } from './AppleIcon';

const meta: Meta<typeof AppleIcon> = {
  component: AppleIcon,
};

export default meta;
type Story = StoryObj<typeof AppleIcon>;

export const Default: Story = { args: { size: 100 } };
