import type { Meta, StoryObj } from '@storybook/react';

import { VSCodeIcon } from './VSCodeIcon';

const meta: Meta<typeof VSCodeIcon> = {
  component: VSCodeIcon,
};

export default meta;
type Story = StoryObj<typeof VSCodeIcon>;

export const Default: Story = { args: { size: 100 } };
