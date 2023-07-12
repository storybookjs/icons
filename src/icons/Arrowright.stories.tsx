import type { Meta, StoryObj } from '@storybook/react';

import { Arrowright } from './Arrowright';

const meta: Meta<typeof Arrowright> = {
  component: Arrowright,
};

export default meta;
type Story = StoryObj<typeof Arrowright>;

export const Default: Story = { args: { size: 14 } };
