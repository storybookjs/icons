import type { Meta, StoryObj } from '@storybook/react';

import { Share } from './Share';

const meta: Meta<typeof Share> = {
  component: Share,
};

export default meta;
type Story = StoryObj<typeof Share>;

export const Default: Story = { args: { size: 100 } };
