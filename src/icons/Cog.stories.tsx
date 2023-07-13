import type { Meta, StoryObj } from '@storybook/react';

import { Cog } from './Cog';

const meta: Meta<typeof Cog> = {
  component: Cog,
};

export default meta;
type Story = StoryObj<typeof Cog>;

export const Default: Story = { args: { size: 100 } };
