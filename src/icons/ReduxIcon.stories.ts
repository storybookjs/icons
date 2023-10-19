import type { Meta, StoryObj } from '@storybook/react';

import { ReduxIcon } from './ReduxIcon';

const meta: Meta<typeof ReduxIcon> = {
  component: ReduxIcon,
};

export default meta;
type Story = StoryObj<typeof ReduxIcon>;

export const Default: Story = { args: { size: 100 } };
