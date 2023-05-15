import type { Meta, StoryObj } from '@storybook/react';
import { Logo } from './Logo';

const meta = {
  title: 'Logo',
  component: Logo,
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LogoStory: Story = {
  name: 'Logo Component',
  args: {
    name: 'chromatic',
    theme: 'light',
    variant: 'default',
    iconOnly: false,
  },
  parameters: {
    layout: 'centered',
  },
};
