import type { Meta, StoryObj } from '@storybook/react';

import { Paperclip } from './Paperclip';

const meta: Meta<typeof Paperclip> = {
  component: Paperclip,
};

export default meta;
type Story = StoryObj<typeof Paperclip>;

export const Default: Story = { args: { size: 14 } };
