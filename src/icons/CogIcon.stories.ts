import type { Meta, StoryObj } from '@storybook/react';

import { CogIcon } from './CogIcon';

const meta: Meta<typeof CogIcon> = {
  component: CogIcon,
};

export default meta;
type Story = StoryObj<typeof CogIcon>;

export const Default: Story = { args: { size: 100 } };
