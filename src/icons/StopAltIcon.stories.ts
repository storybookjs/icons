import type { Meta, StoryObj } from '@storybook/react-vite';

import { StopAltIcon } from './StopAltIcon';

const meta: Meta<typeof StopAltIcon> = {
  component: StopAltIcon,
};

export default meta;
type Story = StoryObj<typeof StopAltIcon>;

export const Default: Story = { args: { size: 100 } };
