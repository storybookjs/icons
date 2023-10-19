import type { Meta, StoryObj } from '@storybook/react';

import { FaceNeutralIcon } from './FaceNeutralIcon';

const meta: Meta<typeof FaceNeutralIcon> = {
  component: FaceNeutralIcon,
};

export default meta;
type Story = StoryObj<typeof FaceNeutralIcon>;

export const Default: Story = { args: { size: 100 } };
