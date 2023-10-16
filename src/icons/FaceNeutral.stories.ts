import type { Meta, StoryObj } from '@storybook/react';

import { FaceNeutral } from './FaceNeutral';

const meta: Meta<typeof FaceNeutral> = {
  component: FaceNeutral,
};

export default meta;
type Story = StoryObj<typeof FaceNeutral>;

export const Default: Story = { args: { size: 100 } };
