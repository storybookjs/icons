import type { Meta, StoryObj } from '@storybook/react';

import { Key } from './Key';

const meta: Meta<typeof Key> = {
  component: Key,
};

export default meta;
type Story = StoryObj<typeof Key>;

export const Default: Story = { args: { size: 100 } };
