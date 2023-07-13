import type { Meta, StoryObj } from '@storybook/react';

import { Arrowupalt } from './Arrowupalt';

const meta: Meta<typeof Arrowupalt> = {
  component: Arrowupalt,
};

export default meta;
type Story = StoryObj<typeof Arrowupalt>;

export const Default: Story = { args: { size: 100 } };
