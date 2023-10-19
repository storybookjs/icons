import type { Meta, StoryObj } from '@storybook/react';

import { ListUnorderedIcon } from './ListUnorderedIcon';

const meta: Meta<typeof ListUnorderedIcon> = {
  component: ListUnorderedIcon,
};

export default meta;
type Story = StoryObj<typeof ListUnorderedIcon>;

export const Default: Story = { args: { size: 100 } };
