import type { Meta, StoryObj } from '@storybook/react';

import { Zoomout } from './Zoomout';

const meta: Meta<typeof Zoomout> = {
  component: Zoomout,
};

export default meta;
type Story = StoryObj<typeof Zoomout>;

export const Default: Story = { args: { size: 14 } };
