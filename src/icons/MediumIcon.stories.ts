import type { Meta, StoryObj } from '@storybook/react';

import { MediumIcon } from './MediumIcon';

const meta: Meta<typeof MediumIcon> = {
  component: MediumIcon,
};

export default meta;
type Story = StoryObj<typeof MediumIcon>;

export const Default: Story = { args: { size: 100 } };
