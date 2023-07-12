import type { Meta, StoryObj } from '@storybook/react';

import { Useradd } from './Useradd';

const meta: Meta<typeof Useradd> = {
  component: Useradd,
};

export default meta;
type Story = StoryObj<typeof Useradd>;

export const Default: Story = { args: { size: 14 } };
