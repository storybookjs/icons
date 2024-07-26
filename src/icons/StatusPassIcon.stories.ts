import type { Meta, StoryObj } from '@storybook/react';

import { StatusPassIcon } from './StatusPassIcon';

const meta: Meta<typeof StatusPassIcon> = {
  component: StatusPassIcon,
};

export default meta;
type Story = StoryObj<typeof StatusPassIcon>;

export const Default: Story = { args: { size: 100 } };
