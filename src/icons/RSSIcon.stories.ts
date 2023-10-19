import type { Meta, StoryObj } from '@storybook/react';

import { RSSIcon } from './RSSIcon';

const meta: Meta<typeof RSSIcon> = {
  component: RSSIcon,
};

export default meta;
type Story = StoryObj<typeof RSSIcon>;

export const Default: Story = { args: { size: 100 } };
