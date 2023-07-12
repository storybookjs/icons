import type { Meta, StoryObj } from '@storybook/react';

import { Collapse } from './Collapse';

const meta: Meta<typeof Collapse> = {
  component: Collapse,
};

export default meta;
type Story = StoryObj<typeof Collapse>;

export const Default: Story = { args: { size: 14 } };
