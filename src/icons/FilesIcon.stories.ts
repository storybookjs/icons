import type { Meta, StoryObj } from '@storybook/react-vite';

import { FilesIcon } from './FilesIcon';

const meta: Meta<typeof FilesIcon> = {
  component: FilesIcon,
};

export default meta;
type Story = StoryObj<typeof FilesIcon>;

export const Default: Story = { args: { size: 100 } };
