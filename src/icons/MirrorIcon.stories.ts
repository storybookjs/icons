import type { Meta, StoryObj } from '@storybook/react';

import { MirrorIcon } from './MirrorIcon';

const meta: Meta<typeof MirrorIcon> = {
  component: MirrorIcon,
};

export default meta;
type Story = StoryObj<typeof MirrorIcon>;

export const Default: Story = { args: { size: 100 } };
