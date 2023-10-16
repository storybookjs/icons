import type { Meta, StoryObj } from '@storybook/react';

import { PinAlt } from './PinAlt';

const meta: Meta<typeof PinAlt> = {
  component: PinAlt,
};

export default meta;
type Story = StoryObj<typeof PinAlt>;

export const Default: Story = { args: { size: 100 } };
