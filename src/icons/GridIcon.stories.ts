import type { Meta, StoryObj } from '@storybook/react-vite';

import { GridIcon } from './GridIcon';

const meta: Meta<typeof GridIcon> = {
  component: GridIcon,
};

export default meta;
type Story = StoryObj<typeof GridIcon>;

export const Default: Story = { args: { size: 100 } };
