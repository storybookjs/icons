import type { Meta, StoryObj } from '@storybook/react-vite';

import { TransferIcon } from './TransferIcon';

const meta: Meta<typeof TransferIcon> = {
  component: TransferIcon,
};

export default meta;
type Story = StoryObj<typeof TransferIcon>;

export const Default: Story = { args: { size: 100 } };
