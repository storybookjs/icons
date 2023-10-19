import type { Meta, StoryObj } from '@storybook/react';

import { InfoIcon } from './InfoIcon';

const meta: Meta<typeof InfoIcon> = {
  component: InfoIcon,
};

export default meta;
type Story = StoryObj<typeof InfoIcon>;

export const Default: Story = { args: { size: 100 } };
