import type { Meta, StoryObj } from '@storybook/react';

import { Structure } from './Structure';

const meta: Meta<typeof Structure> = {
  component: Structure,
};

export default meta;
type Story = StoryObj<typeof Structure>;

export const Default: Story = { args: { size: 100 } };
