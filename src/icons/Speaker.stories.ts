import type { Meta, StoryObj } from '@storybook/react';

import { Speaker } from './Speaker';

const meta: Meta<typeof Speaker> = {
  component: Speaker,
};

export default meta;
type Story = StoryObj<typeof Speaker>;

export const Default: Story = { args: { size: 100 } };
