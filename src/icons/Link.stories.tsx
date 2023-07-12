import type { Meta, StoryObj } from '@storybook/react';

import { Link } from './Link';

const meta: Meta<typeof Link> = {
  component: Link,
};

export default meta;
type Story = StoryObj<typeof Link>;

export const Default: Story = { args: { size: 14 } };
