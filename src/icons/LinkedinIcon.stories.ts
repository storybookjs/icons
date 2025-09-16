import type { Meta, StoryObj } from '@storybook/react-vite';

import { LinkedinIcon } from './LinkedinIcon';

const meta: Meta<typeof LinkedinIcon> = {
  component: LinkedinIcon,
};

export default meta;
type Story = StoryObj<typeof LinkedinIcon>;

export const Default: Story = { args: { size: 100 } };
