import type { Meta, StoryObj } from '@storybook/react';

import { WrenchIcon } from './WrenchIcon';

const meta: Meta<typeof WrenchIcon> = {
  component: WrenchIcon,
};

export default meta;
type Story = StoryObj<typeof WrenchIcon>;

export const Default: Story = { args: { size: 100 } };
