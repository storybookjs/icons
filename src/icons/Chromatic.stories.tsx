import type { Meta, StoryObj } from '@storybook/react';

import { Chromatic } from './Chromatic';

const meta: Meta<typeof Chromatic> = {
  component: Chromatic,
};

export default meta;
type Story = StoryObj<typeof Chromatic>;

export const Default: Story = { args: { size: 14 } };
