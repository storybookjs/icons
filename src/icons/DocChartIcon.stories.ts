import type { Meta, StoryObj } from '@storybook/react';

import { DocChartIcon } from './DocChartIcon';

const meta: Meta<typeof DocChartIcon> = {
  component: DocChartIcon,
};

export default meta;
type Story = StoryObj<typeof DocChartIcon>;

export const Default: Story = { args: { size: 100 } };
