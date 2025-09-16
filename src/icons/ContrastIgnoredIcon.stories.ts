import type { Meta, StoryObj } from '@storybook/react-vite';

import { ContrastIgnoredIcon } from './ContrastIgnoredIcon';

const meta: Meta<typeof ContrastIgnoredIcon> = {
  component: ContrastIgnoredIcon,
};

export default meta;
type Story = StoryObj<typeof ContrastIgnoredIcon>;

export const Default: Story = { args: { size: 100 } };
