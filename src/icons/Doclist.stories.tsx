import type { Meta, StoryObj } from '@storybook/react';

import { Doclist } from './Doclist';

const meta: Meta<typeof Doclist> = {
  component: Doclist,
};

export default meta;
type Story = StoryObj<typeof Doclist>;

export const Default: Story = { args: { size: 14 } };
