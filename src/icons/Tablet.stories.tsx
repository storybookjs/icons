import type { Meta, StoryObj } from '@storybook/react';

import { Tablet } from './Tablet';

const meta: Meta<typeof Tablet> = {
  component: Tablet,
};

export default meta;
type Story = StoryObj<typeof Tablet>;

export const Default: Story = { args: { size: 14 } };
