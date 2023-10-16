import type { Meta, StoryObj } from '@storybook/react';

import { PlayBack } from './PlayBack';

const meta: Meta<typeof PlayBack> = {
  component: PlayBack,
};

export default meta;
type Story = StoryObj<typeof PlayBack>;

export const Default: Story = { args: { size: 100 } };
