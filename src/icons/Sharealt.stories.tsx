import type { Meta, StoryObj } from '@storybook/react';

import { ShareAlt } from './ShareAlt';

const meta: Meta<typeof ShareAlt> = {
  component: ShareAlt,
};

export default meta;
type Story = StoryObj<typeof ShareAlt>;

export const Default: Story = { args: { size: 100 } };
