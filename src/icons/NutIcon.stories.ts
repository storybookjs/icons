import type { Meta, StoryObj } from '@storybook/react';

import { NutIcon } from './NutIcon';

const meta: Meta<typeof NutIcon> = {
  component: NutIcon,
};

export default meta;
type Story = StoryObj<typeof NutIcon>;

export const Default: Story = { args: { size: 100 } };
