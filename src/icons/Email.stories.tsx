import type { Meta, StoryObj } from '@storybook/react';

import { Email } from './Email';

const meta: Meta<typeof Email> = {
  component: Email,
};

export default meta;
type Story = StoryObj<typeof Email>;

export const Default: Story = { args: { size: 14 } };
