import type { Meta, StoryObj } from '@storybook/react';

import { Markdown } from './Markdown';

const meta: Meta<typeof Markdown> = {
  component: Markdown,
};

export default meta;
type Story = StoryObj<typeof Markdown>;

export const Default: Story = { args: { size: 100 } };
