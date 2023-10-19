import type { Meta, StoryObj } from '@storybook/react';

import { ProfileIcon } from './ProfileIcon';

const meta: Meta<typeof ProfileIcon> = {
  component: ProfileIcon,
};

export default meta;
type Story = StoryObj<typeof ProfileIcon>;

export const Default: Story = { args: { size: 100 } };
