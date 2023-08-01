import type { Meta, StoryObj } from '@storybook/react';

import { Download } from './Download';

const meta: Meta<typeof Download> = {
  component: Download,
};

export default meta;
type Story = StoryObj<typeof Download>;

export const Default: Story = { args: { size: 100 } };
