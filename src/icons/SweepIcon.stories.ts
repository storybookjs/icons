import type { Meta, StoryObj } from '@storybook/react-vite';

import { SweepIcon } from './SweepIcon';

const meta: Meta<typeof SweepIcon> = {
  component: SweepIcon,
};

export default meta;
type Story = StoryObj<typeof SweepIcon>;

export const Default: Story = { args: { size: 100 } };
