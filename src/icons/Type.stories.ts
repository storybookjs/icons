import type { Meta, StoryObj } from '@storybook/react';

import { Type } from './Type';

const meta: Meta<typeof Type> = {
  component: Type,
};

export default meta;
type Story = StoryObj<typeof Type>;

export const Default: Story = { args: { size: 100 } };
