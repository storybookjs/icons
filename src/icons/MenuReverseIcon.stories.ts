import type { Meta, StoryObj } from '@storybook/react';

import { MenuReverseIcon } from './MenuReverseIcon';

const meta: Meta<typeof MenuReverseIcon> = {
  component: MenuReverseIcon,
};

export default meta;
type Story = StoryObj<typeof MenuReverseIcon>;

export const Default: Story = { args: { size: 100 } };
