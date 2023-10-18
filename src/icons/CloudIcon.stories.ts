import type { Meta, StoryObj } from '@storybook/react';

import { CloudIcon } from './CloudIcon';

const meta: Meta<typeof CloudIcon> = {
  component: CloudIcon,
};

export default meta;
type Story = StoryObj<typeof CloudIcon>;

export const Default: Story = { args: { size: 100 } };
