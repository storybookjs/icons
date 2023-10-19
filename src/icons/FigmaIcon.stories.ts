import type { Meta, StoryObj } from '@storybook/react';

import { FigmaIcon } from './FigmaIcon';

const meta: Meta<typeof FigmaIcon> = {
  component: FigmaIcon,
};

export default meta;
type Story = StoryObj<typeof FigmaIcon>;

export const Default: Story = { args: { size: 100 } };
