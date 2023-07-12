import type { Meta, StoryObj } from '@storybook/react';

import { Requestchange } from './Requestchange';

const meta: Meta<typeof Requestchange> = {
  component: Requestchange,
};

export default meta;
type Story = StoryObj<typeof Requestchange>;

export const Default: Story = { args: { size: 14 } };
