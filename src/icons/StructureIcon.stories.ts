import type { Meta, StoryObj } from '@storybook/react-vite';

import { StructureIcon } from './StructureIcon';

const meta: Meta<typeof StructureIcon> = {
  component: StructureIcon,
};

export default meta;
type Story = StoryObj<typeof StructureIcon>;

export const Default: Story = { args: { size: 100 } };
