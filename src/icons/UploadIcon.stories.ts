import type { Meta, StoryObj } from '@storybook/react';

import { UploadIcon } from './UploadIcon';

const meta: Meta<typeof UploadIcon> = {
  component: UploadIcon,
};

export default meta;
type Story = StoryObj<typeof UploadIcon>;

export const Default: Story = { args: { size: 100 } };
