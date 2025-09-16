import type { Meta, StoryObj } from '@storybook/react-vite';

import { PowerIcon } from './PowerIcon';

const meta: Meta<typeof PowerIcon> = {
  component: PowerIcon,
};

export default meta;
type Story = StoryObj<typeof PowerIcon>;

export const Default: Story = { args: { size: 100 } };
