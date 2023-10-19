import type { Meta, StoryObj } from '@storybook/react';

import { ChangedIcon } from './ChangedIcon';

const meta: Meta<typeof ChangedIcon> = {
  component: ChangedIcon,
};

export default meta;
type Story = StoryObj<typeof ChangedIcon>;

export const Default: Story = { args: { size: 100 } };
