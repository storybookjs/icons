import type { Meta, StoryObj } from '@storybook/react';

import { Admin } from './Admin';

const meta: Meta<typeof Admin> = {
  component: Admin,
};

export default meta;
type Story = StoryObj<typeof Admin>;

export const Default: Story = { args: { size: 14 } };
