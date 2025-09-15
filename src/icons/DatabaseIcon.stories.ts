import type { Meta, StoryObj } from '@storybook/react-vite';

import { DatabaseIcon } from './DatabaseIcon';

const meta: Meta<typeof DatabaseIcon> = {
  component: DatabaseIcon,
};

export default meta;
type Story = StoryObj<typeof DatabaseIcon>;

export const Default: Story = { args: { size: 100 } };
