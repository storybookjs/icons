import type { Meta, StoryObj } from '@storybook/react';

import { CompassIcon } from './CompassIcon';

const meta: Meta<typeof CompassIcon> = {
  component: CompassIcon,
};

export default meta;
type Story = StoryObj<typeof CompassIcon>;

export const Default: Story = { args: { size: 100 } };
