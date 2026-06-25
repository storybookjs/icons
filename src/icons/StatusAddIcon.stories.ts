import type { Meta, StoryObj } from '@storybook/react-vite';

import { StatusAddIcon } from './StatusAddIcon';

const meta: Meta<typeof StatusAddIcon> = {
  component: StatusAddIcon,
};

export default meta;
type Story = StoryObj<typeof StatusAddIcon>;

export const Default: Story = { args: { size: 100 } };
