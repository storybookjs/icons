import type { Meta, StoryObj } from '@storybook/react';

import { Arrowleftalt } from './Arrowleftalt';

const meta: Meta<typeof Arrowleftalt> = {
  component: Arrowleftalt,
};

export default meta;
type Story = StoryObj<typeof Arrowleftalt>;

export const Default: Story = { args: { size: 14 } };
