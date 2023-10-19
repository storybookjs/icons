import type { Meta, StoryObj } from '@storybook/react';

import { BoxIcon } from './BoxIcon';

const meta: Meta<typeof BoxIcon> = {
  component: BoxIcon,
};

export default meta;
type Story = StoryObj<typeof BoxIcon>;

export const Default: Story = { args: { size: 100 } };
