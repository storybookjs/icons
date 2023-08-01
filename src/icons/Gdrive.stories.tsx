import type { Meta, StoryObj } from '@storybook/react';

import { GDrive } from './GDrive';

const meta: Meta<typeof GDrive> = {
  component: GDrive,
};

export default meta;
type Story = StoryObj<typeof GDrive>;

export const Default: Story = { args: { size: 100 } };
