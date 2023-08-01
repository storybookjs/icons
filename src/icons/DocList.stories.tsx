import type { Meta, StoryObj } from '@storybook/react';

import { DocList } from './DocList';

const meta: Meta<typeof DocList> = {
  component: DocList,
};

export default meta;
type Story = StoryObj<typeof DocList>;

export const Default: Story = { args: { size: 100 } };
