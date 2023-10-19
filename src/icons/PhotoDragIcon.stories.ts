import type { Meta, StoryObj } from '@storybook/react';

import { PhotoDragIcon } from './PhotoDragIcon';

const meta: Meta<typeof PhotoDragIcon> = {
  component: PhotoDragIcon,
};

export default meta;
type Story = StoryObj<typeof PhotoDragIcon>;

export const Default: Story = { args: { size: 100 } };
