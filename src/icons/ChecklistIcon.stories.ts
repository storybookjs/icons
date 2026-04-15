import type { Meta, StoryObj } from '@storybook/react-vite';

import { ChecklistIcon } from './ChecklistIcon';

const meta: Meta<typeof ChecklistIcon> = {
  component: ChecklistIcon,
};

export default meta;
type Story = StoryObj<typeof ChecklistIcon>;

export const Default: Story = { args: { size: 100 } };
