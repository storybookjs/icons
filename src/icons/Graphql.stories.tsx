import type { Meta, StoryObj } from '@storybook/react';

import { Graphql } from './Graphql';

const meta: Meta<typeof Graphql> = {
  component: Graphql,
};

export default meta;
type Story = StoryObj<typeof Graphql>;

export const Default: Story = { args: { size: 100 } };
