import type { Meta, StoryObj } from '@storybook/react';

import { QuestionIcon } from './QuestionIcon';

const meta: Meta<typeof QuestionIcon> = {
  component: QuestionIcon,
};

export default meta;
type Story = StoryObj<typeof QuestionIcon>;

export const Default: Story = { args: { size: 100 } };
