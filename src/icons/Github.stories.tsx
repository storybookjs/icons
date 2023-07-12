import type { Meta, StoryObj } from '@storybook/react';

import { Github } from './Github';

const meta: Meta<typeof Github> = {
  component: Github,
};

export default meta;
type Story = StoryObj<typeof Github>;

export const Default: Story = { args: { size: 14 } };
