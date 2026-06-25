import type { Meta, StoryObj } from '@storybook/react-vite';

import { SparkleIcon } from './SparkleIcon';

const meta: Meta<typeof SparkleIcon> = {
  component: SparkleIcon,
};

export default meta;
type Story = StoryObj<typeof SparkleIcon>;

export const Default: Story = { args: { size: 100 } };
