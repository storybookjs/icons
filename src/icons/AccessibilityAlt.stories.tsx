import type { Meta, StoryObj } from '@storybook/react';

import { AccessibilityAlt } from './AccessibilityAlt';

const meta: Meta<typeof AccessibilityAlt> = {
  component: AccessibilityAlt,
};

export default meta;
type Story = StoryObj<typeof AccessibilityAlt>;

export const Default: Story = { args: { size: 14 } };
