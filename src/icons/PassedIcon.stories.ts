import type { Meta, StoryObj } from '@storybook/react';

import { PassedIcon } from './PassedIcon';

const meta: Meta<typeof PassedIcon> = {
  component: PassedIcon,
};

export default meta;
type Story = StoryObj<typeof PassedIcon>;

export const Default: Story = { args: { size: 100 } };
