import type { Meta, StoryObj } from '@storybook/react';

import { ProceedIcon } from './ProceedIcon';

const meta: Meta<typeof ProceedIcon> = {
  component: ProceedIcon,
};

export default meta;
type Story = StoryObj<typeof ProceedIcon>;

export const Default: Story = { args: { size: 100 } };
