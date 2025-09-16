import type { Meta, StoryObj } from '@storybook/react-vite';

import { CommitIcon } from './CommitIcon';

const meta: Meta<typeof CommitIcon> = {
  component: CommitIcon,
};

export default meta;
type Story = StoryObj<typeof CommitIcon>;

export const Default: Story = { args: { size: 100 } };
