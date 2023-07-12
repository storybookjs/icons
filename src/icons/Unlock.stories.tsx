import type { Meta, StoryObj } from '@storybook/react';

import { Unlock } from './Unlock';

const meta: Meta<typeof Unlock> = {
  component: Unlock,
};

export default meta;
type Story = StoryObj<typeof Unlock>;

export const Default: Story = { args: { size: 14 } };
