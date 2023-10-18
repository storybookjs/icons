import type { Meta, StoryObj } from '@storybook/react';

import { BookIcon } from './BookIcon';

const meta: Meta<typeof BookIcon> = {
  component: BookIcon,
};

export default meta;
type Story = StoryObj<typeof BookIcon>;

export const Default: Story = { args: { size: 100 } };
