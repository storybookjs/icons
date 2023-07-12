import type { Meta, StoryObj } from '@storybook/react';

import { Medium } from './Medium';

const meta: Meta<typeof Medium> = {
  component: Medium,
};

export default meta;
type Story = StoryObj<typeof Medium>;

export const Default: Story = { args: { size: 100 } };
