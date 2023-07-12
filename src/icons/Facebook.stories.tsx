import type { Meta, StoryObj } from '@storybook/react';

import { Facebook } from './Facebook';

const meta: Meta<typeof Facebook> = {
  component: Facebook,
};

export default meta;
type Story = StoryObj<typeof Facebook>;

export const Default: Story = { args: { size: 14 } };
