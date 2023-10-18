import type { Meta, StoryObj } from '@storybook/react';

import { MoonIcon } from './MoonIcon';

const meta: Meta<typeof MoonIcon> = {
  component: MoonIcon,
};

export default meta;
type Story = StoryObj<typeof MoonIcon>;

export const Default: Story = { args: { size: 100 } };
