import type { Meta, StoryObj } from '@storybook/react';

import { Print } from './Print';

const meta: Meta<typeof Print> = {
  component: Print,
};

export default meta;
type Story = StoryObj<typeof Print>;

export const Default: Story = { args: { size: 100 } };
