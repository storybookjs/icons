import type { Meta, StoryObj } from '@storybook/react';

import { RedirectIcon } from './RedirectIcon';

const meta: Meta<typeof RedirectIcon> = {
  component: RedirectIcon,
};

export default meta;
type Story = StoryObj<typeof RedirectIcon>;

export const Default: Story = { args: { size: 100 } };
