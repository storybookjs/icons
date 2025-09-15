import type { Meta, StoryObj } from '@storybook/react-vite';

import { FolderIcon } from './FolderIcon';

const meta: Meta<typeof FolderIcon> = {
  component: FolderIcon,
};

export default meta;
type Story = StoryObj<typeof FolderIcon>;

export const Default: Story = { args: { size: 100 } };
