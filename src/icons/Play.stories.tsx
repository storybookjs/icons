import type { Meta, StoryObj } from '@storybook/react';

import { Play } from './Play';

const meta: Meta<typeof Play> = {
  component: Play,
};

export default meta;
type Story = StoryObj<typeof Play>;

export const Default: Story = { args: { size: 100 } };
