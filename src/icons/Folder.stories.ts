import type { Meta, StoryObj } from '@storybook/react';

import { Folder } from './Folder';

const meta: Meta<typeof Folder> = {
  component: Folder,
};

export default meta;
type Story = StoryObj<typeof Folder>;

export const Default: Story = { args: { size: 100 } };
