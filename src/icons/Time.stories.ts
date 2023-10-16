import type { Meta, StoryObj } from '@storybook/react';

import { Time } from './Time';

const meta: Meta<typeof Time> = {
  component: Time,
};

export default meta;
type Story = StoryObj<typeof Time>;

export const Default: Story = { args: { size: 100 } };
