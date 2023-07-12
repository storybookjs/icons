import type { Meta, StoryObj } from '@storybook/react';

import { Eye } from './Eye';

const meta: Meta<typeof Eye> = {
  component: Eye,
};

export default meta;
type Story = StoryObj<typeof Eye>;

export const Default: Story = { args: { size: 14 } };
