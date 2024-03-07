import type { Meta, StoryObj } from '@storybook/react';

import { ArrowBottomRightIcon } from './ArrowBottomRightIcon';

const meta: Meta<typeof ArrowBottomRightIcon> = {
  component: ArrowBottomRightIcon,
};

export default meta;
type Story = StoryObj<typeof ArrowBottomRightIcon>;

export const Default: Story = { args: { size: 100 } };
