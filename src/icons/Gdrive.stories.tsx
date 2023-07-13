import type { Meta, StoryObj } from '@storybook/react';

import { Gdrive } from './Gdrive';

const meta: Meta<typeof Gdrive> = {
  component: Gdrive,
};

export default meta;
type Story = StoryObj<typeof Gdrive>;

export const Default: Story = { args: { size: 100 } };
