import type { Meta, StoryObj } from '@storybook/react-vite';

import { PlayBackIcon } from './PlayBackIcon';

const meta: Meta<typeof PlayBackIcon> = {
  component: PlayBackIcon,
};

export default meta;
type Story = StoryObj<typeof PlayBackIcon>;

export const Default: Story = { args: { size: 100 } };
