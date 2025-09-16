import type { Meta, StoryObj } from '@storybook/react-vite';

import { EditorIcon } from './EditorIcon';

const meta: Meta<typeof EditorIcon> = {
  component: EditorIcon,
};

export default meta;
type Story = StoryObj<typeof EditorIcon>;

export const Default: Story = { args: { size: 100 } };
