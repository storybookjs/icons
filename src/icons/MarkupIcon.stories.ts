import type { Meta, StoryObj } from '@storybook/react';

import { MarkupIcon } from './MarkupIcon';

const meta: Meta<typeof MarkupIcon> = {
  component: MarkupIcon,
};

export default meta;
type Story = StoryObj<typeof MarkupIcon>;

export const Default: Story = { args: { size: 100 } };
