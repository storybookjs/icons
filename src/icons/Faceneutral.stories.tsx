import type { Meta, StoryObj } from '@storybook/react';

import { Faceneutral } from './Faceneutral';

const meta: Meta<typeof Faceneutral> = {
  component: Faceneutral,
};

export default meta;
type Story = StoryObj<typeof Faceneutral>;

export const Default: Story = { args: { size: 14 } };
