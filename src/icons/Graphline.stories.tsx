import type { Meta, StoryObj } from '@storybook/react';

import { Graphline } from './Graphline';

const meta: Meta<typeof Graphline> = {
  component: Graphline,
};

export default meta;
type Story = StoryObj<typeof Graphline>;

export const Default: Story = { args: { size: 100 } };
