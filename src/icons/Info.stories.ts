import type { Meta, StoryObj } from '@storybook/react';

import { Info } from './Info';

const meta: Meta<typeof Info> = {
  component: Info,
};

export default meta;
type Story = StoryObj<typeof Info>;

export const Default: Story = { args: { size: 100 } };
