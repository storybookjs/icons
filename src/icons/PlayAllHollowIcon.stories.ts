import type { Meta, StoryObj } from '@storybook/react';

import { PlayAllHollowIcon } from './PlayAllHollowIcon';

const meta: Meta<typeof PlayAllHollowIcon> = {
  component: PlayAllHollowIcon,
};

export default meta;
type Story = StoryObj<typeof PlayAllHollowIcon>;

export const Default: Story = { args: { size: 100 } };
