import type { Meta, StoryObj } from '@storybook/react';

import { ShareAltIcon } from './ShareAltIcon';

const meta: Meta<typeof ShareAltIcon> = {
  component: ShareAltIcon,
};

export default meta;
type Story = StoryObj<typeof ShareAltIcon>;

export const Default: Story = { args: { size: 100 } };
