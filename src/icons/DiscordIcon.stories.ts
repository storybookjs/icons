import type { Meta, StoryObj } from '@storybook/react';

import { DiscordIcon } from './DiscordIcon';

const meta: Meta<typeof DiscordIcon> = {
  component: DiscordIcon,
};

export default meta;
type Story = StoryObj<typeof DiscordIcon>;

export const Default: Story = { args: { size: 100 } };
