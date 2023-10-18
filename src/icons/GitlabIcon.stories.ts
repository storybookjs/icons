import type { Meta, StoryObj } from '@storybook/react';

import { GitlabIcon } from './GitlabIcon';

const meta: Meta<typeof GitlabIcon> = {
  component: GitlabIcon,
};

export default meta;
type Story = StoryObj<typeof GitlabIcon>;

export const Default: Story = { args: { size: 100 } };
