import type { Meta, StoryObj } from '@storybook/react';

import { VerifiedIcon } from './VerifiedIcon';

const meta: Meta<typeof VerifiedIcon> = {
  component: VerifiedIcon,
};

export default meta;
type Story = StoryObj<typeof VerifiedIcon>;

export const Default: Story = { args: { size: 100 } };
