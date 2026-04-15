import type { Meta, StoryObj } from '@storybook/react-vite';

import { StatusNewIcon } from './StatusNewIcon';

const meta: Meta<typeof StatusNewIcon> = {
  component: StatusNewIcon,
};

export default meta;
type Story = StoryObj<typeof StatusNewIcon>;

export const Default: Story = { args: { size: 100 } };
