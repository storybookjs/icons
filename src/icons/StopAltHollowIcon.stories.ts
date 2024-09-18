import type { Meta, StoryObj } from '@storybook/react';

import { StopAltHollowIcon } from './StopAltHollowIcon';

const meta: Meta<typeof StopAltHollowIcon> = {
  component: StopAltHollowIcon,
};

export default meta;
type Story = StoryObj<typeof StopAltHollowIcon>;

export const Default: Story = { args: { size: 100 } };
