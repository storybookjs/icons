import type { Meta, StoryObj } from '@storybook/react';

import { PlayNextIcon } from './PlayNextIcon';

const meta: Meta<typeof PlayNextIcon> = {
  component: PlayNextIcon,
};

export default meta;
type Story = StoryObj<typeof PlayNextIcon>;

export const Default: Story = { args: { size: 100 } };
