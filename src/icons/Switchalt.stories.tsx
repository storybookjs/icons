import type { Meta, StoryObj } from '@storybook/react';

import { Switchalt } from './Switchalt';

const meta: Meta<typeof Switchalt> = {
  component: Switchalt,
};

export default meta;
type Story = StoryObj<typeof Switchalt>;

export const Default: Story = { args: { size: 100 } };
