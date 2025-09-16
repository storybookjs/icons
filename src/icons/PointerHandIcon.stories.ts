import type { Meta, StoryObj } from '@storybook/react-vite';

import { PointerHandIcon } from './PointerHandIcon';

const meta: Meta<typeof PointerHandIcon> = {
  component: PointerHandIcon,
};

export default meta;
type Story = StoryObj<typeof PointerHandIcon>;

export const Default: Story = { args: { size: 100 } };
