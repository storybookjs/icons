import type { Meta, StoryObj } from '@storybook/react-vite';

import { CopyIcon } from './CopyIcon';

const meta: Meta<typeof CopyIcon> = {
  component: CopyIcon,
};

export default meta;
type Story = StoryObj<typeof CopyIcon>;

export const Default: Story = { args: { size: 100 } };
