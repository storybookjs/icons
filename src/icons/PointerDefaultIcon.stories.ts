import type { Meta, StoryObj } from '@storybook/react';

import { PointerDefaultIcon } from './PointerDefaultIcon';

const meta: Meta<typeof PointerDefaultIcon> = {
  component: PointerDefaultIcon,
};

export default meta;
type Story = StoryObj<typeof PointerDefaultIcon>;

export const Default: Story = { args: { size: 100 } };
