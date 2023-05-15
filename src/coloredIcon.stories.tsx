import type { Meta, StoryObj } from '@storybook/react';
import { ColoredIcon } from './ColoredIcon';

const meta = {
  title: 'ColoredIcon',
  component: ColoredIcon,
} satisfies Meta<typeof ColoredIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const IconStory: Story = {
  name: 'Icon Component',
  args: {
    size: 48,
    name: 'accessibility',
  },
  parameters: {
    layout: 'centered',
  },
};
