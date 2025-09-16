import type { Meta, StoryObj } from '@storybook/react-vite';

import { SwitchAltIcon } from './SwitchAltIcon';

const meta: Meta<typeof SwitchAltIcon> = {
  component: SwitchAltIcon,
};

export default meta;
type Story = StoryObj<typeof SwitchAltIcon>;

export const Default: Story = { args: { size: 100 } };
