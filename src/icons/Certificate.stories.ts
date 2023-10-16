import type { Meta, StoryObj } from '@storybook/react';

import { Certificate } from './Certificate';

const meta: Meta<typeof Certificate> = {
  component: Certificate,
};

export default meta;
type Story = StoryObj<typeof Certificate>;

export const Default: Story = { args: { size: 100 } };
