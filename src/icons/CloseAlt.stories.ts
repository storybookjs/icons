import type { Meta, StoryObj } from '@storybook/react';

import { CloseAlt } from './CloseAlt';

const meta: Meta<typeof CloseAlt> = {
  component: CloseAlt,
};

export default meta;
type Story = StoryObj<typeof CloseAlt>;

export const Default: Story = { args: { size: 100 } };
