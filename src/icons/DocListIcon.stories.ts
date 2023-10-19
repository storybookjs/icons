import type { Meta, StoryObj } from '@storybook/react';

import { DocListIcon } from './DocListIcon';

const meta: Meta<typeof DocListIcon> = {
  component: DocListIcon,
};

export default meta;
type Story = StoryObj<typeof DocListIcon>;

export const Default: Story = { args: { size: 100 } };
