import type { Meta, StoryObj } from '@storybook/react';

import { SpeakerIcon } from './SpeakerIcon';

const meta: Meta<typeof SpeakerIcon> = {
  component: SpeakerIcon,
};

export default meta;
type Story = StoryObj<typeof SpeakerIcon>;

export const Default: Story = { args: { size: 100 } };
