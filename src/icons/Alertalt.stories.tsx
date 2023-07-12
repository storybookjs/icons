import type { Meta, StoryObj } from '@storybook/react';

import { Alertalt } from './Alertalt';

const meta: Meta<typeof Alertalt> = {
  component: Alertalt,
};

export default meta;
type Story = StoryObj<typeof Alertalt>;

export const Default: Story = { args: { size: 100 } };
