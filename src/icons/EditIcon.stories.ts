import type { Meta, StoryObj } from '@storybook/react';

import { EditIcon } from './EditIcon';

const meta: Meta<typeof EditIcon> = {
  component: EditIcon,
};

export default meta;
type Story = StoryObj<typeof EditIcon>;

export const Default: Story = { args: { size: 100 } };
