import type { Meta, StoryObj } from '@storybook/react';

import { Paragraph } from './Paragraph';

const meta: Meta<typeof Paragraph> = {
  component: Paragraph,
};

export default meta;
type Story = StoryObj<typeof Paragraph>;

export const Default: Story = { args: { size: 14 } };
