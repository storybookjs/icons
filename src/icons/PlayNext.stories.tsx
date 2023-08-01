import type { Meta, StoryObj } from '@storybook/react';

import { PlayNext } from './PlayNext';

const meta: Meta<typeof PlayNext> = {
  component: PlayNext,
};

export default meta;
type Story = StoryObj<typeof PlayNext>;

export const Default: Story = { args: { size: 100 } };
