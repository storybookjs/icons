import type { Meta, StoryObj } from '@storybook/react';

import { VSCode } from './VSCode';

const meta: Meta<typeof VSCode> = {
  component: VSCode,
};

export default meta;
type Story = StoryObj<typeof VSCode>;

export const Default: Story = { args: { size: 14 } };
