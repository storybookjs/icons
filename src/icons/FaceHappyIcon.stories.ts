import type { Meta, StoryObj } from '@storybook/react';

import { FaceHappyIcon } from './FaceHappyIcon';

const meta: Meta<typeof FaceHappyIcon> = {
  component: FaceHappyIcon,
};

export default meta;
type Story = StoryObj<typeof FaceHappyIcon>;

export const Default: Story = { args: { size: 100 } };
