import type { Meta, StoryObj } from '@storybook/react';

import { Linkedin } from './Linkedin';

const meta: Meta<typeof Linkedin> = {
  component: Linkedin,
};

export default meta;
type Story = StoryObj<typeof Linkedin>;

export const Default: Story = { args: { size: 100 } };
