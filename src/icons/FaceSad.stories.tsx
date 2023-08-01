import type { Meta, StoryObj } from '@storybook/react';

import { FaceSad } from './FaceSad';

const meta: Meta<typeof FaceSad> = {
  component: FaceSad,
};

export default meta;
type Story = StoryObj<typeof FaceSad>;

export const Default: Story = { args: { size: 100 } };
