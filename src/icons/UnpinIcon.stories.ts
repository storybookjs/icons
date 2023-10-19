import type { Meta, StoryObj } from '@storybook/react';

import { UnpinIcon } from './UnpinIcon';

const meta: Meta<typeof UnpinIcon> = {
  component: UnpinIcon,
};

export default meta;
type Story = StoryObj<typeof UnpinIcon>;

export const Default: Story = { args: { size: 100 } };
