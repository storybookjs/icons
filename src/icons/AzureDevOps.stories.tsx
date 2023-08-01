import type { Meta, StoryObj } from '@storybook/react';

import { AzureDevOps } from './AzureDevOps';

const meta: Meta<typeof AzureDevOps> = {
  component: AzureDevOps,
};

export default meta;
type Story = StoryObj<typeof AzureDevOps>;

export const Default: Story = { args: { size: 100 } };
