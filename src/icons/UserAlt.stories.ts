import type { Meta, StoryObj } from '@storybook/react';

import { UserAlt } from './UserAlt';

const meta: Meta<typeof UserAlt> = {
  component: UserAlt,
};

export default meta;
type Story = StoryObj<typeof UserAlt>;

export const Default: Story = { args: { size: 100 } };
