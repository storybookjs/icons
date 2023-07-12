import type { Meta, StoryObj } from '@storybook/react';

import { Document } from './Document';

const meta: Meta<typeof Document> = {
  component: Document,
};

export default meta;
type Story = StoryObj<typeof Document>;

export const Default: Story = { args: { size: 14 } };
