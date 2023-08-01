import type { Meta, StoryObj } from '@storybook/react';

import { MenuReverse } from './MenuReverse';

const meta: Meta<typeof MenuReverse> = {
  component: MenuReverse,
};

export default meta;
type Story = StoryObj<typeof MenuReverse>;

export const Default: Story = { args: { size: 100 } };
