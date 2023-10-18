import type { Meta, StoryObj } from '@storybook/react';

import { MergeIcon } from './MergeIcon';

const meta: Meta<typeof MergeIcon> = {
  component: MergeIcon,
};

export default meta;
type Story = StoryObj<typeof MergeIcon>;

export const Default: Story = { args: { size: 100 } };
