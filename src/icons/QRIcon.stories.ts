import type { Meta, StoryObj } from '@storybook/react-vite';

import { QRIcon } from './QRIcon';

const meta: Meta<typeof QRIcon> = {
  component: QRIcon,
};

export default meta;
type Story = StoryObj<typeof QRIcon>;

export const Default: Story = { args: { size: 100 } };
