import type { Meta, StoryObj } from '@storybook/react';

import { Arrowleft } from './Arrowleft';

const meta: Meta<typeof Arrowleft> = {
  component: Arrowleft,
};

export default meta;
type Story = StoryObj<typeof Arrowleft>;

export const Default: Story = { args: { size: 14 } };
