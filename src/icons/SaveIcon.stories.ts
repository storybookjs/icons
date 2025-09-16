import type { Meta, StoryObj } from '@storybook/react-vite';

import { SaveIcon } from './SaveIcon';

const meta: Meta<typeof SaveIcon> = {
  component: SaveIcon,
};

export default meta;
type Story = StoryObj<typeof SaveIcon>;

export const Default: Story = { args: { size: 100 } };
