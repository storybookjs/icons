import type { Meta, StoryObj } from '@storybook/react';

import { AccessibilityIcon } from './AccessibilityIcon';

const meta: Meta<typeof AccessibilityIcon> = {
  component: AccessibilityIcon,
};

export default meta;
type Story = StoryObj<typeof AccessibilityIcon>;

export const Default: Story = { args: { size: 100 } };
