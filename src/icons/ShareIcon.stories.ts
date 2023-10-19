import type { Meta, StoryObj } from '@storybook/react';

import { ShareIcon } from './ShareIcon';

const meta: Meta<typeof ShareIcon> = {
  component: ShareIcon,
};

export default meta;
type Story = StoryObj<typeof ShareIcon>;

export const Default: Story = { args: { size: 100 } };
