import type { Meta, StoryObj } from '@storybook/react';

import { UnlockIcon } from './UnlockIcon';

const meta: Meta<typeof UnlockIcon> = {
  component: UnlockIcon,
};

export default meta;
type Story = StoryObj<typeof UnlockIcon>;

export const Default: Story = { args: { size: 100 } };
