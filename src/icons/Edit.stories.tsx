import type { Meta, StoryObj } from '@storybook/react';

import { Edit } from './Edit';

const meta: Meta<typeof Edit> = {
  component: Edit,
};

export default meta;
type Story = StoryObj<typeof Edit>;

export const Default: Story = { args: { size: 100 } };
