import type { Meta, StoryObj } from '@storybook/react';

import { MobileIcon } from './MobileIcon';

const meta: Meta<typeof MobileIcon> = {
  component: MobileIcon,
};

export default meta;
type Story = StoryObj<typeof MobileIcon>;

export const Default: Story = { args: { size: 100 } };
