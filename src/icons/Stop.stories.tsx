import type { Meta, StoryObj } from '@storybook/react';

import { Stop } from './Stop';

const meta: Meta<typeof Stop> = {
  component: Stop,
};

export default meta;
type Story = StoryObj<typeof Stop>;

export const Default: Story = { args: { size: 14 } };
