import type { Meta, StoryObj } from '@storybook/react';

import { XIcon } from './XIcon';

const meta: Meta<typeof XIcon> = {
  component: XIcon,
};

export default meta;
type Story = StoryObj<typeof XIcon>;

export const Default: Story = { args: { size: 100 } };
