import type { Meta, StoryObj } from '@storybook/react';

import { PrintIcon } from './PrintIcon';

const meta: Meta<typeof PrintIcon> = {
  component: PrintIcon,
};

export default meta;
type Story = StoryObj<typeof PrintIcon>;

export const Default: Story = { args: { size: 100 } };
