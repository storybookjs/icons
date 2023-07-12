import type { Meta, StoryObj } from '@storybook/react';

import { Verified } from './Verified';

const meta: Meta<typeof Verified> = {
  component: Verified,
};

export default meta;
type Story = StoryObj<typeof Verified>;

export const Default: Story = { args: { size: 14 } };
