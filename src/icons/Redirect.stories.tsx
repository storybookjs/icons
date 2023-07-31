import type { Meta, StoryObj } from '@storybook/react';

import { Redirect } from './Redirect';

const meta: Meta<typeof Redirect> = {
  component: Redirect,
};

export default meta;
type Story = StoryObj<typeof Redirect>;

export const Default: Story = { args: { size: 100 } };
