import type { Meta, StoryObj } from '@storybook/react';

import { LocationIcon } from './LocationIcon';

const meta: Meta<typeof LocationIcon> = {
  component: LocationIcon,
};

export default meta;
type Story = StoryObj<typeof LocationIcon>;

export const Default: Story = { args: { size: 100 } };
