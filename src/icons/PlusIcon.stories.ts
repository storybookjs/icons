import type { Meta, StoryObj } from '@storybook/react';

import { PlusIcon } from './PlusIcon';

const meta: Meta<typeof PlusIcon> = {
  component: PlusIcon,
};

export default meta;
type Story = StoryObj<typeof PlusIcon>;

export const Default: Story = { args: { size: 100 } };
