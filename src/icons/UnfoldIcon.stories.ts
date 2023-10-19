import type { Meta, StoryObj } from '@storybook/react';

import { UnfoldIcon } from './UnfoldIcon';

const meta: Meta<typeof UnfoldIcon> = {
  component: UnfoldIcon,
};

export default meta;
type Story = StoryObj<typeof UnfoldIcon>;

export const Default: Story = { args: { size: 100 } };
