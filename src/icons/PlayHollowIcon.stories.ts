import type { Meta, StoryObj } from '@storybook/react';

import { PlayHollowIcon } from './PlayHollowIcon';

const meta: Meta<typeof PlayHollowIcon> = {
  component: PlayHollowIcon,
};

export default meta;
type Story = StoryObj<typeof PlayHollowIcon>;

export const Default: Story = { args: { size: 100 } };
