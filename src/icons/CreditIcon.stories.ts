import type { Meta, StoryObj } from '@storybook/react';

import { CreditIcon } from './CreditIcon';

const meta: Meta<typeof CreditIcon> = {
  component: CreditIcon,
};

export default meta;
type Story = StoryObj<typeof CreditIcon>;

export const Default: Story = { args: { size: 100 } };
