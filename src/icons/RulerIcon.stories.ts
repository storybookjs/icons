import type { Meta, StoryObj } from '@storybook/react';

import { RulerIcon } from './RulerIcon';

const meta: Meta<typeof RulerIcon> = {
  component: RulerIcon,
};

export default meta;
type Story = StoryObj<typeof RulerIcon>;

export const Default: Story = { args: { size: 100 } };
