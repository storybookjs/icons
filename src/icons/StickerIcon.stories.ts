import type { Meta, StoryObj } from '@storybook/react';

import { StickerIcon } from './StickerIcon';

const meta: Meta<typeof StickerIcon> = {
  component: StickerIcon,
};

export default meta;
type Story = StoryObj<typeof StickerIcon>;

export const Default: Story = { args: { size: 100 } };
