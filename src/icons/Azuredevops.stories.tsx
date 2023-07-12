import type { Meta, StoryObj } from '@storybook/react';

import { Azuredevops } from './Azuredevops';

const meta: Meta<typeof Azuredevops> = {
  component: Azuredevops,
};

export default meta;
type Story = StoryObj<typeof Azuredevops>;

export const Default: Story = { args: { size: 14 } };
