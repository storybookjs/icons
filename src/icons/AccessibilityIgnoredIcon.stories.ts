import type { Meta, StoryObj } from '@storybook/react-vite';

import { AccessibilityIgnoredIcon } from './AccessibilityIgnoredIcon';

const meta: Meta<typeof AccessibilityIgnoredIcon> = {
  component: AccessibilityIgnoredIcon,
};

export default meta;
type Story = StoryObj<typeof AccessibilityIgnoredIcon>;

export const Default: Story = { args: { size: 100 } };
