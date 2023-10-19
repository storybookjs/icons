import type { Meta, StoryObj } from '@storybook/react';

import { WandIcon } from './WandIcon';

const meta: Meta<typeof WandIcon> = {
  component: WandIcon,
};

export default meta;
type Story = StoryObj<typeof WandIcon>;

export const Default: Story = { args: { size: 100 } };
