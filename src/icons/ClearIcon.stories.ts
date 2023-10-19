import type { Meta, StoryObj } from '@storybook/react';

import { ClearIcon } from './ClearIcon';

const meta: Meta<typeof ClearIcon> = {
  component: ClearIcon,
};

export default meta;
type Story = StoryObj<typeof ClearIcon>;

export const Default: Story = { args: { size: 100 } };
