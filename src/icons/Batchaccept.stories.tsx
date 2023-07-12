import type { Meta, StoryObj } from '@storybook/react';

import { Batchaccept } from './Batchaccept';

const meta: Meta<typeof Batchaccept> = {
  component: Batchaccept,
};

export default meta;
type Story = StoryObj<typeof Batchaccept>;

export const Default: Story = { args: { size: 14 } };
