import type { Meta, StoryObj } from '@storybook/react';

import { RewindIcon } from './RewindIcon';

const meta: Meta<typeof RewindIcon> = {
  component: RewindIcon,
};

export default meta;
type Story = StoryObj<typeof RewindIcon>;

export const Default: Story = { args: { size: 100 } };
