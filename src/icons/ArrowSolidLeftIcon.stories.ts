import type { Meta, StoryObj } from '@storybook/react';

import { ArrowSolidLeftIcon } from './ArrowSolidLeftIcon';

const meta: Meta<typeof ArrowSolidLeftIcon> = {
  component: ArrowSolidLeftIcon,
};

export default meta;
type Story = StoryObj<typeof ArrowSolidLeftIcon>;

export const Default: Story = { args: { size: 100 } };
