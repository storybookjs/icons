import type { Meta, StoryObj } from '@storybook/react';

import { Zoom } from './Zoom';

const meta: Meta<typeof Zoom> = {
  component: Zoom,
};

export default meta;
type Story = StoryObj<typeof Zoom>;

export const Default: Story = { args: { size: 100 } };
