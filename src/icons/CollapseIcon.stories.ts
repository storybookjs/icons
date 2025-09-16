import type { Meta, StoryObj } from '@storybook/react-vite';

import { CollapseIcon } from './CollapseIcon';

const meta: Meta<typeof CollapseIcon> = {
  component: CollapseIcon,
};

export default meta;
type Story = StoryObj<typeof CollapseIcon>;

export const Default: Story = { args: { size: 100 } };
