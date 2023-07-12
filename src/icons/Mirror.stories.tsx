import type { Meta, StoryObj } from '@storybook/react';

import { Mirror } from './Mirror';

const meta: Meta<typeof Mirror> = {
  component: Mirror,
};

export default meta;
type Story = StoryObj<typeof Mirror>;

export const Default: Story = { args: { size: 14 } };
