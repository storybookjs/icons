import type { Meta, StoryObj } from '@storybook/react';

import { FlagIcon } from './FlagIcon';

const meta: Meta<typeof FlagIcon> = {
  component: FlagIcon,
};

export default meta;
type Story = StoryObj<typeof FlagIcon>;

export const Default: Story = { args: { size: 100 } };
