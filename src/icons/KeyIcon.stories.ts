import type { Meta, StoryObj } from '@storybook/react';

import { KeyIcon } from './KeyIcon';

const meta: Meta<typeof KeyIcon> = {
  component: KeyIcon,
};

export default meta;
type Story = StoryObj<typeof KeyIcon>;

export const Default: Story = { args: { size: 100 } };
