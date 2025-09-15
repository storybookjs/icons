import type { Meta, StoryObj } from '@storybook/react-vite';

import { BatchAcceptIcon } from './BatchAcceptIcon';

const meta: Meta<typeof BatchAcceptIcon> = {
  component: BatchAcceptIcon,
};

export default meta;
type Story = StoryObj<typeof BatchAcceptIcon>;

export const Default: Story = { args: { size: 100 } };
