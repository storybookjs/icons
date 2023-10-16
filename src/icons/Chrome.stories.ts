import type { Meta, StoryObj } from '@storybook/react';

import { Chrome } from './Chrome';

const meta: Meta<typeof Chrome> = {
  component: Chrome,
};

export default meta;
type Story = StoryObj<typeof Chrome>;

export const Default: Story = { args: { size: 100 } };
