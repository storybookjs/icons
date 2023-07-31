import type { Meta, StoryObj } from '@storybook/react';

import { ArrowSolidLeft } from './ArrowSolidLeft';

const meta: Meta<typeof ArrowSolidLeft> = {
  component: ArrowSolidLeft,
};

export default meta;
type Story = StoryObj<typeof ArrowSolidLeft>;

export const Default: Story = { args: { size: 100 } };
