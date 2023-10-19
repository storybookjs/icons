import type { Meta, StoryObj } from '@storybook/react';

import { ComponentDrivenIcon } from './ComponentDrivenIcon';

const meta: Meta<typeof ComponentDrivenIcon> = {
  component: ComponentDrivenIcon,
};

export default meta;
type Story = StoryObj<typeof ComponentDrivenIcon>;

export const Default: Story = { args: { size: 100 } };
