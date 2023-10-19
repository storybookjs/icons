import type { Meta, StoryObj } from '@storybook/react';

import { AddIcon } from './AddIcon';

const meta: Meta<typeof AddIcon> = {
  component: AddIcon,
};

export default meta;
type Story = StoryObj<typeof AddIcon>;

export const Default: Story = { args: { size: 100 } };
