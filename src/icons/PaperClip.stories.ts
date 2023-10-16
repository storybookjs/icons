import type { Meta, StoryObj } from '@storybook/react';

import { PaperClip } from './PaperClip';

const meta: Meta<typeof PaperClip> = {
  component: PaperClip,
};

export default meta;
type Story = StoryObj<typeof PaperClip>;

export const Default: Story = { args: { size: 100 } };
