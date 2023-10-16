import type { Meta, StoryObj } from '@storybook/react';

import { Twitter } from './Twitter';

const meta: Meta<typeof Twitter> = {
  component: Twitter,
};

export default meta;
type Story = StoryObj<typeof Twitter>;

export const Default: Story = { args: { size: 100 } };
