import type { Meta, StoryObj } from '@storybook/react';

import { Pullrequest } from './Pullrequest';

const meta: Meta<typeof Pullrequest> = {
  component: Pullrequest,
};

export default meta;
type Story = StoryObj<typeof Pullrequest>;

export const Default: Story = { args: { size: 14 } };
