import type { Meta, StoryObj } from '@storybook/react';

import { Profile } from './Profile';

const meta: Meta<typeof Profile> = {
  component: Profile,
};

export default meta;
type Story = StoryObj<typeof Profile>;

export const Default: Story = { args: { size: 14 } };
