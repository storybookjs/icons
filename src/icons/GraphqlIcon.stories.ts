import type { Meta, StoryObj } from '@storybook/react';

import { GraphqlIcon } from './GraphqlIcon';

const meta: Meta<typeof GraphqlIcon> = {
  component: GraphqlIcon,
};

export default meta;
type Story = StoryObj<typeof GraphqlIcon>;

export const Default: Story = { args: { size: 100 } };
