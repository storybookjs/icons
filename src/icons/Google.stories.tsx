import type { Meta, StoryObj } from '@storybook/react';

import { Google } from './Google';

const meta: Meta<typeof Google> = {
  component: Google,
};

export default meta;
type Story = StoryObj<typeof Google>;

export const Default: Story = { args: { size: 14 } };
