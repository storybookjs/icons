import type { Meta, StoryObj } from '@storybook/react';

import { Ellipsis } from './Ellipsis';

const meta: Meta<typeof Ellipsis> = {
  component: Ellipsis,
};

export default meta;
type Story = StoryObj<typeof Ellipsis>;

export const Default: Story = { args: { size: 14 } };
