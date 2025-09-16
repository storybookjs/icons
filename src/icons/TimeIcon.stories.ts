import type { Meta, StoryObj } from '@storybook/react-vite';

import { TimeIcon } from './TimeIcon';

const meta: Meta<typeof TimeIcon> = {
  component: TimeIcon,
};

export default meta;
type Story = StoryObj<typeof TimeIcon>;

export const Default: Story = { args: { size: 100 } };
