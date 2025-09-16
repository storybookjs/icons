import type { Meta, StoryObj } from '@storybook/react-vite';

import { MarkdownIcon } from './MarkdownIcon';

const meta: Meta<typeof MarkdownIcon> = {
  component: MarkdownIcon,
};

export default meta;
type Story = StoryObj<typeof MarkdownIcon>;

export const Default: Story = { args: { size: 100 } };
