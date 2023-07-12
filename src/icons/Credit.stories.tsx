import type { Meta, StoryObj } from '@storybook/react';

import { Credit } from './Credit';

const meta: Meta<typeof Credit> = {
  component: Credit,
};

export default meta;
type Story = StoryObj<typeof Credit>;

export const Default: Story = { args: { size: 14 } };
