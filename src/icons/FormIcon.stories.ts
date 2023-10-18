import type { Meta, StoryObj } from '@storybook/react';

import { FormIcon } from './FormIcon';

const meta: Meta<typeof FormIcon> = {
  component: FormIcon,
};

export default meta;
type Story = StoryObj<typeof FormIcon>;

export const Default: Story = { args: { size: 100 } };
