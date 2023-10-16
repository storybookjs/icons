import type { Meta, StoryObj } from '@storybook/react';

import { DocChart } from './DocChart';

const meta: Meta<typeof DocChart> = {
  component: DocChart,
};

export default meta;
type Story = StoryObj<typeof DocChart>;

export const Default: Story = { args: { size: 100 } };
