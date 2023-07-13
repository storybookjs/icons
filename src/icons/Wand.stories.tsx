import type { Meta, StoryObj } from '@storybook/react';

import { Wand } from './Wand';

const meta: Meta<typeof Wand> = {
  component: Wand,
};

export default meta;
type Story = StoryObj<typeof Wand>;

export const Default: Story = { args: { size: 100 } };
