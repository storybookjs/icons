import type { Meta, StoryObj } from '@storybook/react';

import { Fastforward } from './Fastforward';

const meta: Meta<typeof Fastforward> = {
  component: Fastforward,
};

export default meta;
type Story = StoryObj<typeof Fastforward>;

export const Default: Story = { args: { size: 100 } };
