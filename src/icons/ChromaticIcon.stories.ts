import type { Meta, StoryObj } from '@storybook/react';

import { ChromaticIcon } from './ChromaticIcon';

const meta: Meta<typeof ChromaticIcon> = {
  component: ChromaticIcon,
};

export default meta;
type Story = StoryObj<typeof ChromaticIcon>;

export const Default: Story = { args: { size: 100 } };
