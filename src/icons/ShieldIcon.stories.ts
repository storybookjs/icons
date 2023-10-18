import type { Meta, StoryObj } from '@storybook/react';

import { ShieldIcon } from './ShieldIcon';

const meta: Meta<typeof ShieldIcon> = {
  component: ShieldIcon,
};

export default meta;
type Story = StoryObj<typeof ShieldIcon>;

export const Default: Story = { args: { size: 100 } };
