import type { Meta, StoryObj } from '@storybook/react';

import { GDriveIcon } from './GDriveIcon';

const meta: Meta<typeof GDriveIcon> = {
  component: GDriveIcon,
};

export default meta;
type Story = StoryObj<typeof GDriveIcon>;

export const Default: Story = { args: { size: 100 } };
