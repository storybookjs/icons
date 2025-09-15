import type { Meta, StoryObj } from '@storybook/react-vite';

import { PhotoIcon } from './PhotoIcon';

const meta: Meta<typeof PhotoIcon> = {
  component: PhotoIcon,
};

export default meta;
type Story = StoryObj<typeof PhotoIcon>;

export const Default: Story = { args: { size: 100 } };
