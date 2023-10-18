import type { Meta, StoryObj } from '@storybook/react';

import { GraphLineIcon } from './GraphLineIcon';

const meta: Meta<typeof GraphLineIcon> = {
  component: GraphLineIcon,
};

export default meta;
type Story = StoryObj<typeof GraphLineIcon>;

export const Default: Story = { args: { size: 100 } };
