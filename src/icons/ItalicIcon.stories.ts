import type { Meta, StoryObj } from '@storybook/react';

import { ItalicIcon } from './ItalicIcon';

const meta: Meta<typeof ItalicIcon> = {
  component: ItalicIcon,
};

export default meta;
type Story = StoryObj<typeof ItalicIcon>;

export const Default: Story = { args: { size: 100 } };
