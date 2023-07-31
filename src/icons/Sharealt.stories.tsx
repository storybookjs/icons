import type { Meta, StoryObj } from '@storybook/react';

import { Sharealt } from './Sharealt';

const meta: Meta<typeof Sharealt> = {
  component: Sharealt,
};

export default meta;
type Story = StoryObj<typeof Sharealt>;

export const Default: Story = { args: { size: 100 } };
