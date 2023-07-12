import type { Meta, StoryObj } from '@storybook/react';

import { Facehappy } from './Facehappy';

const meta: Meta<typeof Facehappy> = {
  component: Facehappy,
};

export default meta;
type Story = StoryObj<typeof Facehappy>;

export const Default: Story = { args: { size: 14 } };
