import type { Meta, StoryObj } from '@storybook/react';

import { Arrowrightalt } from './Arrowrightalt';

const meta: Meta<typeof Arrowrightalt> = {
  component: Arrowrightalt,
};

export default meta;
type Story = StoryObj<typeof Arrowrightalt>;

export const Default: Story = { args: { size: 100 } };
