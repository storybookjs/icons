import type { Meta, StoryObj } from '@storybook/react';

import { Support } from './Support';

const meta: Meta<typeof Support> = {
  component: Support,
};

export default meta;
type Story = StoryObj<typeof Support>;

export const Default: Story = { args: { size: 14 } };
