import type { Meta, StoryObj } from '@storybook/react';

import { Commentadd } from './Commentadd';

const meta: Meta<typeof Commentadd> = {
  component: Commentadd,
};

export default meta;
type Story = StoryObj<typeof Commentadd>;

export const Default: Story = { args: { size: 14 } };
