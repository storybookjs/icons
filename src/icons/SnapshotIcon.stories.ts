import type { Meta, StoryObj } from '@storybook/react-vite';

import { SnapshotIcon } from './SnapshotIcon';

const meta: Meta<typeof SnapshotIcon> = {
  component: SnapshotIcon,
};

export default meta;
type Story = StoryObj<typeof SnapshotIcon>;

export const Default: Story = { args: { size: 100 } };
