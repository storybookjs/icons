import type { Meta, StoryObj } from '@storybook/react';

import { ComponentDriven } from './ComponentDriven';

const meta: Meta<typeof ComponentDriven> = {
  component: ComponentDriven,
};

export default meta;
type Story = StoryObj<typeof ComponentDriven>;

export const Default: Story = { args: { size: 14 } };
