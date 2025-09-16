import type { Meta, StoryObj } from '@storybook/react-vite';

import { StatusFailIcon } from './StatusFailIcon';

const meta: Meta<typeof StatusFailIcon> = {
  component: StatusFailIcon,
};

export default meta;
type Story = StoryObj<typeof StatusFailIcon>;

export const Default: Story = { args: { size: 100 } };
