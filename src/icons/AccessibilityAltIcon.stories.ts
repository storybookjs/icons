import type { Meta, StoryObj } from '@storybook/react';

import { AccessibilityAltIcon } from './AccessibilityAltIcon';

const meta: Meta<typeof AccessibilityAltIcon> = {
  component: AccessibilityAltIcon,
};

export default meta;
type Story = StoryObj<typeof AccessibilityAltIcon>;

export const Default: Story = { args: { size: 100 } };
