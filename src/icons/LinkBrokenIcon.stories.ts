import type { Meta, StoryObj } from '@storybook/react-vite';

import { LinkBrokenIcon } from './LinkBrokenIcon';

const meta: Meta<typeof LinkBrokenIcon> = {
  component: LinkBrokenIcon,
};

export default meta;
type Story = StoryObj<typeof LinkBrokenIcon>;

export const Default: Story = { args: { size: 100 } };
