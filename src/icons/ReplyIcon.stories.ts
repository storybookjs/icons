import type { Meta, StoryObj } from '@storybook/react';

import { ReplyIcon } from './ReplyIcon';

const meta: Meta<typeof ReplyIcon> = {
  component: ReplyIcon,
};

export default meta;
type Story = StoryObj<typeof ReplyIcon>;

export const Default: Story = { args: { size: 100 } };
