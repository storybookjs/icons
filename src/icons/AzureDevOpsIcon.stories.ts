import type { Meta, StoryObj } from '@storybook/react';

import { AzureDevOpsIcon } from './AzureDevOpsIcon';

const meta: Meta<typeof AzureDevOpsIcon> = {
  component: AzureDevOpsIcon,
};

export default meta;
type Story = StoryObj<typeof AzureDevOpsIcon>;

export const Default: Story = { args: { size: 100 } };
