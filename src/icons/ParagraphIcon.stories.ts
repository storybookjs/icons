import type { Meta, StoryObj } from '@storybook/react-vite';

import { ParagraphIcon } from './ParagraphIcon';

const meta: Meta<typeof ParagraphIcon> = {
  component: ParagraphIcon,
};

export default meta;
type Story = StoryObj<typeof ParagraphIcon>;

export const Default: Story = { args: { size: 100 } };
