import type { Meta, StoryObj } from '@storybook/react';

import { Rewind } from './Rewind';

const meta: Meta<typeof Rewind> = {
  component: Rewind,
};

export default meta;
type Story = StoryObj<typeof Rewind>;

export const Default: Story = { args: { size: 14 } };
