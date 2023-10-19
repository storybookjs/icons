import type { Meta, StoryObj } from '@storybook/react';

import { CrossIcon } from './CrossIcon';

const meta: Meta<typeof CrossIcon> = {
  component: CrossIcon,
};

export default meta;
type Story = StoryObj<typeof CrossIcon>;

export const Default: Story = { args: { size: 100 } };
