import type { Meta, StoryObj } from '@storybook/react';

import { Compass } from './Compass';

const meta: Meta<typeof Compass> = {
  component: Compass,
};

export default meta;
type Story = StoryObj<typeof Compass>;

export const Default: Story = { args: { size: 14 } };
