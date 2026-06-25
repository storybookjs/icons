import type { Meta, StoryObj } from '@storybook/react-vite';

import { StatusRemoveIcon } from './StatusRemoveIcon';

const meta: Meta<typeof StatusRemoveIcon> = {
  component: StatusRemoveIcon,
};

export default meta;
type Story = StoryObj<typeof StatusRemoveIcon>;

export const Default: Story = { args: { size: 100 } };
