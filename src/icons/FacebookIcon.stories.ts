import type { Meta, StoryObj } from '@storybook/react';

import { FacebookIcon } from './FacebookIcon';

const meta: Meta<typeof FacebookIcon> = {
  component: FacebookIcon,
};

export default meta;
type Story = StoryObj<typeof FacebookIcon>;

export const Default: Story = { args: { size: 100 } };
