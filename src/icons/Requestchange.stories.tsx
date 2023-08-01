import type { Meta, StoryObj } from '@storybook/react';

import { RequestChange } from './RequestChange';

const meta: Meta<typeof RequestChange> = {
  component: RequestChange,
};

export default meta;
type Story = StoryObj<typeof RequestChange>;

export const Default: Story = { args: { size: 100 } };
