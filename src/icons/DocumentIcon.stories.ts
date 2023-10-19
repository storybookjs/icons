import type { Meta, StoryObj } from '@storybook/react';

import { DocumentIcon } from './DocumentIcon';

const meta: Meta<typeof DocumentIcon> = {
  component: DocumentIcon,
};

export default meta;
type Story = StoryObj<typeof DocumentIcon>;

export const Default: Story = { args: { size: 100 } };
