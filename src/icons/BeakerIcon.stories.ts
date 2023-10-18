import type { Meta, StoryObj } from '@storybook/react';

import { BeakerIcon } from './BeakerIcon';

const meta: Meta<typeof BeakerIcon> = {
  component: BeakerIcon,
};

export default meta;
type Story = StoryObj<typeof BeakerIcon>;

export const Default: Story = { args: { size: 100 } };
