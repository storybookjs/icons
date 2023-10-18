import type { Meta, StoryObj } from '@storybook/react';

import { LinuxIcon } from './LinuxIcon';

const meta: Meta<typeof LinuxIcon> = {
  component: LinuxIcon,
};

export default meta;
type Story = StoryObj<typeof LinuxIcon>;

export const Default: Story = { args: { size: 100 } };
