import type { Meta, StoryObj } from '@storybook/react-vite';

import { SortDownIcon } from './SortDownIcon';

const meta: Meta<typeof SortDownIcon> = {
  component: SortDownIcon,
};

export default meta;
type Story = StoryObj<typeof SortDownIcon>;

export const Default: Story = { args: { size: 100 } };
