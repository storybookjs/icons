import type { Meta, StoryObj } from '@storybook/react-vite';

import { EmailIcon } from './EmailIcon';

const meta: Meta<typeof EmailIcon> = {
  component: EmailIcon,
};

export default meta;
type Story = StoryObj<typeof EmailIcon>;

export const Default: Story = { args: { size: 100 } };
