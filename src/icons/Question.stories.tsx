import type { Meta, StoryObj } from '@storybook/react';

import { Question } from './Question';

const meta: Meta<typeof Question> = {
  component: Question,
};

export default meta;
type Story = StoryObj<typeof Question>;

export const Default: Story = { args: { size: 14 } };
