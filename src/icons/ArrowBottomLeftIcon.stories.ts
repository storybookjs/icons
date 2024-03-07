import type { Meta, StoryObj } from '@storybook/react';

import { ArrowBottomLeftIcon } from './ArrowBottomLeftIcon';

const meta: Meta<typeof ArrowBottomLeftIcon> = {
  component: ArrowBottomLeftIcon,
};

export default meta;
type Story = StoryObj<typeof ArrowBottomLeftIcon>;

export const Default: Story = { args: { size: 100 } };
