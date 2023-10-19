import type { Meta, StoryObj } from '@storybook/react';

import { LinkIcon } from './LinkIcon';

const meta: Meta<typeof LinkIcon> = {
  component: LinkIcon,
};

export default meta;
type Story = StoryObj<typeof LinkIcon>;

export const Default: Story = { args: { size: 100 } };
