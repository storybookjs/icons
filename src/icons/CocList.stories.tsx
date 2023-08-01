import type { Meta, StoryObj } from '@storybook/react';

import { CocList } from './CocList';

const meta: Meta<typeof CocList> = {
  component: CocList,
};

export default meta;
type Story = StoryObj<typeof CocList>;

export const Default: Story = { args: { size: 100 } };
