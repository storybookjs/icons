import type { Meta, StoryObj } from '@storybook/react';

import { Jumpto } from './Jumpto';

const meta: Meta<typeof Jumpto> = {
  component: Jumpto,
};

export default meta;
type Story = StoryObj<typeof Jumpto>;

export const Default: Story = { args: { size: 14 } };
