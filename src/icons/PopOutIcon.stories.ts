import type { Meta, StoryObj } from '@storybook/react-vite';

import { PopOutIcon } from './PopOutIcon';

const meta: Meta<typeof PopOutIcon> = {
  component: PopOutIcon,
};

export default meta;
type Story = StoryObj<typeof PopOutIcon>;

export const Default: Story = { args: { size: 100 } };
