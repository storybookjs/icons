import type { Meta, StoryObj } from '@storybook/react';

import { Upload } from './Upload';

const meta: Meta<typeof Upload> = {
  component: Upload,
};

export default meta;
type Story = StoryObj<typeof Upload>;

export const Default: Story = { args: { size: 14 } };
