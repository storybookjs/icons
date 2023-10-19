import type { Meta, StoryObj } from '@storybook/react';

import { CommandIcon } from './CommandIcon';

const meta: Meta<typeof CommandIcon> = {
  component: CommandIcon,
};

export default meta;
type Story = StoryObj<typeof CommandIcon>;

export const Default: Story = { args: { size: 100 } };
