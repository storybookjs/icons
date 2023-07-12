import type { Meta, StoryObj } from '@storybook/react';

import { Location } from './Location';

const meta: Meta<typeof Location> = {
  component: Location,
};

export default meta;
type Story = StoryObj<typeof Location>;

export const Default: Story = { args: { size: 14 } };
