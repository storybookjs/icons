import type { Meta, StoryObj } from '@storybook/react';

import { SwitchAlt } from './SwitchAlt';

const meta: Meta<typeof SwitchAlt> = {
  component: SwitchAlt,
};

export default meta;
type Story = StoryObj<typeof SwitchAlt>;

export const Default: Story = { args: { size: 100 } };
