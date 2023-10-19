import type { Meta, StoryObj } from '@storybook/react';

import { GlobeIcon } from './GlobeIcon';

const meta: Meta<typeof GlobeIcon> = {
  component: GlobeIcon,
};

export default meta;
type Story = StoryObj<typeof GlobeIcon>;

export const Default: Story = { args: { size: 100 } };
