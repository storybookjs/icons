import type { Meta, StoryObj } from '@storybook/react-vite';

import { SortUpIcon } from './SortUpIcon';

const meta: Meta<typeof SortUpIcon> = {
  component: SortUpIcon,
};

export default meta;
type Story = StoryObj<typeof SortUpIcon>;

export const Default: Story = { args: { size: 100 } };
