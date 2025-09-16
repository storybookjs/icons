import type { Meta, StoryObj } from '@storybook/react-vite';

import { ComponentIcon } from './ComponentIcon';

const meta: Meta<typeof ComponentIcon> = {
  component: ComponentIcon,
};

export default meta;
type Story = StoryObj<typeof ComponentIcon>;

export const Default: Story = { args: { size: 100 } };
