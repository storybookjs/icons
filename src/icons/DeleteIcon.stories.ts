import type { Meta, StoryObj } from '@storybook/react';

import { DeleteIcon } from './DeleteIcon';

const meta: Meta<typeof DeleteIcon> = {
  component: DeleteIcon,
};

export default meta;
type Story = StoryObj<typeof DeleteIcon>;

export const Default: Story = { args: { size: 100 } };
