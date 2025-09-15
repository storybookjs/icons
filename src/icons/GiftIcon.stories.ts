import type { Meta, StoryObj } from '@storybook/react-vite';

import { GiftIcon } from './GiftIcon';

const meta: Meta<typeof GiftIcon> = {
  component: GiftIcon,
};

export default meta;
type Story = StoryObj<typeof GiftIcon>;

export const Default: Story = { args: { size: 100 } };
