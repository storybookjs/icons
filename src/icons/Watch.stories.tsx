import type { Meta, StoryObj } from '@storybook/react';

import { Watch } from './Watch';

const meta: Meta<typeof Watch> = {
  component: Watch,
};

export default meta;
type Story = StoryObj<typeof Watch>;

export const Default: Story = { args: { size: 14 } };
