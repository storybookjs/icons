import type { Meta, StoryObj } from '@storybook/react';

import { Markup } from './Markup';

const meta: Meta<typeof Markup> = {
  component: Markup,
};

export default meta;
type Story = StoryObj<typeof Markup>;

export const Default: Story = { args: { size: 14 } };
