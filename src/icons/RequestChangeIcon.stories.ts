import type { Meta, StoryObj } from '@storybook/react';

import { RequestChangeIcon } from './RequestChangeIcon';

const meta: Meta<typeof RequestChangeIcon> = {
  component: RequestChangeIcon,
};

export default meta;
type Story = StoryObj<typeof RequestChangeIcon>;

export const Default: Story = { args: { size: 100 } };
