import type { Meta, StoryObj } from '@storybook/react-vite';

import { PaintBrushIcon } from './PaintBrushIcon';

const meta: Meta<typeof PaintBrushIcon> = {
  component: PaintBrushIcon,
};

export default meta;
type Story = StoryObj<typeof PaintBrushIcon>;

export const Default: Story = { args: { size: 100 } };
