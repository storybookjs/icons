import type { Meta, StoryObj } from '@storybook/react';

import { Eyeclose } from './Eyeclose';

const meta: Meta<typeof Eyeclose> = {
  component: Eyeclose,
};

export default meta;
type Story = StoryObj<typeof Eyeclose>;

export const Default: Story = { args: { size: 100 } };
