import type { Meta, StoryObj } from '@storybook/react';

import { SupportIcon } from './SupportIcon';

const meta: Meta<typeof SupportIcon> = {
  component: SupportIcon,
};

export default meta;
type Story = StoryObj<typeof SupportIcon>;

export const Default: Story = { args: { size: 100 } };
