import type { Meta, StoryObj } from '@storybook/react-vite';

import { PaintBrushAltIcon } from './PaintBrushAltIcon';

const meta: Meta<typeof PaintBrushAltIcon> = {
  component: PaintBrushAltIcon,
};

export default meta;
type Story = StoryObj<typeof PaintBrushAltIcon>;

export const Default: Story = { args: { size: 100 } };
