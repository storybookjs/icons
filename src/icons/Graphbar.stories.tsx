import type { Meta, StoryObj } from '@storybook/react';

import { Graphbar } from './Graphbar';

const meta: Meta<typeof Graphbar> = {
  component: Graphbar,
};

export default meta;
type Story = StoryObj<typeof Graphbar>;

export const Default: Story = { args: { size: 100 } };
