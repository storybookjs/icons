import type { Meta, StoryObj } from '@storybook/react-vite';

import { ExpandIcon } from './ExpandIcon';

const meta: Meta<typeof ExpandIcon> = {
  component: ExpandIcon,
};

export default meta;
type Story = StoryObj<typeof ExpandIcon>;

export const Default: Story = { args: { size: 100 } };
