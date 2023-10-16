import type { Meta, StoryObj } from '@storybook/react';

import { PhotoDrag } from './PhotoDrag';

const meta: Meta<typeof PhotoDrag> = {
  component: PhotoDrag,
};

export default meta;
type Story = StoryObj<typeof PhotoDrag>;

export const Default: Story = { args: { size: 100 } };
