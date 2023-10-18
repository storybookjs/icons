import type { Meta, StoryObj } from '@storybook/react';

import { CloseAltIcon } from './CloseAltIcon';

const meta: Meta<typeof CloseAltIcon> = {
  component: CloseAltIcon,
};

export default meta;
type Story = StoryObj<typeof CloseAltIcon>;

export const Default: Story = { args: { size: 100 } };
