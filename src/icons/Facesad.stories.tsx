import type { Meta, StoryObj } from '@storybook/react';

import { Facesad } from './Facesad';

const meta: Meta<typeof Facesad> = {
  component: Facesad,
};

export default meta;
type Story = StoryObj<typeof Facesad>;

export const Default: Story = { args: { size: 14 } };
