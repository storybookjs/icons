import type { Meta, StoryObj } from '@storybook/react';

import { ParagraphIcon } from './ParagraphIcon';

const meta: Meta<typeof ParagraphIcon> = {
  component: ParagraphIcon,
};

export default meta;
type Story = StoryObj<typeof ParagraphIcon>;

export const Default: Story = { args: { size: 100 } };
