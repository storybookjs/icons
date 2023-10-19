import type { Meta, StoryObj } from '@storybook/react';

import { FaceSadIcon } from './FaceSadIcon';

const meta: Meta<typeof FaceSadIcon> = {
  component: FaceSadIcon,
};

export default meta;
type Story = StoryObj<typeof FaceSadIcon>;

export const Default: Story = { args: { size: 100 } };
