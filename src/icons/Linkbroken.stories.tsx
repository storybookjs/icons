import type { Meta, StoryObj } from '@storybook/react';

import { LinkBroken } from './LinkBroken';

const meta: Meta<typeof LinkBroken> = {
  component: LinkBroken,
};

export default meta;
type Story = StoryObj<typeof LinkBroken>;

export const Default: Story = { args: { size: 100 } };
