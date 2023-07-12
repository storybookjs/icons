import type { Meta, StoryObj } from '@storybook/react';

import { Zoomreset } from './Zoomreset';

const meta: Meta<typeof Zoomreset> = {
  component: Zoomreset,
};

export default meta;
type Story = StoryObj<typeof Zoomreset>;

export const Default: Story = { args: { size: 14 } };
