import type { Meta, StoryObj } from '@storybook/react';

import { Youtube } from './Youtube';

const meta: Meta<typeof Youtube> = {
  component: Youtube,
};

export default meta;
type Story = StoryObj<typeof Youtube>;

export const Default: Story = { args: { size: 100 } };
