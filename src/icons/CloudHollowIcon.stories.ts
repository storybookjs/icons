import type { Meta, StoryObj } from '@storybook/react';

import { CloudHollowIcon } from './CloudHollowIcon';

const meta: Meta<typeof CloudHollowIcon> = {
  component: CloudHollowIcon,
};

export default meta;
type Story = StoryObj<typeof CloudHollowIcon>;

export const Default: Story = { args: { size: 100 } };
