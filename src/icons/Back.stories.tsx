import type { Meta, StoryObj } from '@storybook/react';

import { Back } from './Back';

const meta: Meta<typeof Back> = {
  component: Back,
};

export default meta;
type Story = StoryObj<typeof Back>;

export const Default: Story = { args: { size: 100 } };
