import type { Meta, StoryObj } from '@storybook/react';

import { FaceHappy } from './FaceHappy';

const meta: Meta<typeof FaceHappy> = {
  component: FaceHappy,
};

export default meta;
type Story = StoryObj<typeof FaceHappy>;

export const Default: Story = { args: { size: 100 } };
