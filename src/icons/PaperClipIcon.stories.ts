import type { Meta, StoryObj } from '@storybook/react-vite';

import { PaperClipIcon } from './PaperClipIcon';

const meta: Meta<typeof PaperClipIcon> = {
  component: PaperClipIcon,
};

export default meta;
type Story = StoryObj<typeof PaperClipIcon>;

export const Default: Story = { args: { size: 100 } };
