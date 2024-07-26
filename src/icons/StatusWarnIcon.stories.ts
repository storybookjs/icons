import type { Meta, StoryObj } from '@storybook/react';

import { StatusWarnIcon } from './StatusWarnIcon';

const meta: Meta<typeof StatusWarnIcon> = {
  component: StatusWarnIcon,
};

export default meta;
type Story = StoryObj<typeof StatusWarnIcon>;

export const Default: Story = { args: { size: 100 } };
