import type { Meta, StoryObj } from '@storybook/react';

import { Gridalt } from './Gridalt';

const meta: Meta<typeof Gridalt> = {
  component: Gridalt,
};

export default meta;
type Story = StoryObj<typeof Gridalt>;

export const Default: Story = { args: { size: 100 } };
