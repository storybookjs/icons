import type { Meta, StoryObj } from '@storybook/react';

import { StorybookIcon } from './StorybookIcon';

const meta: Meta<typeof StorybookIcon> = {
  component: StorybookIcon,
};

export default meta;
type Story = StoryObj<typeof StorybookIcon>;

export const Default: Story = { args: { size: 100 } };
