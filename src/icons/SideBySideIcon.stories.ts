import type { Meta, StoryObj } from '@storybook/react';

import { SideBySideIcon } from './SideBySideIcon';

const meta: Meta<typeof SideBySideIcon> = {
  component: SideBySideIcon,
};

export default meta;
type Story = StoryObj<typeof SideBySideIcon>;

export const Default: Story = { args: { size: 100 } };
