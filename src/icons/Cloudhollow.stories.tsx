import type { Meta, StoryObj } from '@storybook/react';

import { CloudHollow } from './CloudHollow';

const meta: Meta<typeof CloudHollow> = {
  component: CloudHollow,
};

export default meta;
type Story = StoryObj<typeof CloudHollow>;

export const Default: Story = { args: { size: 100 } };
