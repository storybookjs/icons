import type { Meta, StoryObj } from '@storybook/react';

import { ControlsIcon } from './ControlsIcon';

const meta: Meta<typeof ControlsIcon> = {
  component: ControlsIcon,
};

export default meta;
type Story = StoryObj<typeof ControlsIcon>;

export const Default: Story = { args: { size: 100 } };
