import type { Meta, StoryObj } from '@storybook/react';

import { TypeIcon } from './TypeIcon';

const meta: Meta<typeof TypeIcon> = {
  component: TypeIcon,
};

export default meta;
type Story = StoryObj<typeof TypeIcon>;

export const Default: Story = { args: { size: 100 } };
