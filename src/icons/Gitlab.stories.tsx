import type { Meta, StoryObj } from '@storybook/react';

import { Gitlab } from './Gitlab';

const meta: Meta<typeof Gitlab> = {
  component: Gitlab,
};

export default meta;
type Story = StoryObj<typeof Gitlab>;

export const Default: Story = { args: { size: 14 } };
