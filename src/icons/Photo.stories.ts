import type { Meta, StoryObj } from '@storybook/react';

import { Photo } from './Photo';

const meta: Meta<typeof Photo> = {
  component: Photo,
};

export default meta;
type Story = StoryObj<typeof Photo>;

export const Default: Story = { args: { size: 100 } };
