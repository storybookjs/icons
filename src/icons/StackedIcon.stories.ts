import type { Meta, StoryObj } from '@storybook/react-vite';

import { StackedIcon } from './StackedIcon';

const meta: Meta<typeof StackedIcon> = {
  component: StackedIcon,
};

export default meta;
type Story = StoryObj<typeof StackedIcon>;

export const Default: Story = { args: { size: 100 } };
