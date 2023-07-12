import type { Meta, StoryObj } from '@storybook/react';

import { Arrowdownalt  } from './Arrowdownalt ';

const meta: Meta<typeof Arrowdownalt > = {
  component: Arrowdownalt ,
};

export default meta;
type Story = StoryObj<typeof Arrowdownalt >;

export const Default: Story = { args: { size: 14 } };
