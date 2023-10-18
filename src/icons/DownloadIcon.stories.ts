import type { Meta, StoryObj } from '@storybook/react';

import { DownloadIcon } from './DownloadIcon';

const meta: Meta<typeof DownloadIcon> = {
  component: DownloadIcon,
};

export default meta;
type Story = StoryObj<typeof DownloadIcon>;

export const Default: Story = { args: { size: 100 } };
