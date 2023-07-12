import type { Meta, StoryObj } from '@storybook/react';

import { Passed } from './Passed';

const meta: Meta<typeof Passed> = {
  component: Passed,
};

export default meta;
type Story = StoryObj<typeof Passed>;

export const Default: Story = { args: { size: 14 } };
