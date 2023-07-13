import type { Meta, StoryObj } from '@storybook/react';

import { Playnext } from './Playnext';

const meta: Meta<typeof Playnext> = {
  component: Playnext,
};

export default meta;
type Story = StoryObj<typeof Playnext>;

export const Default: Story = { args: { size: 100 } };
