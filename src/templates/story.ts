export const story = (name: string) => {
  return `import type { Meta, StoryObj } from '@storybook/react';

import { ${name} } from './${name}';

const meta: Meta<typeof ${name}> = {
  component: ${name},
};

export default meta;
type Story = StoryObj<typeof ${name}>;

export const Default: Story = { args: { size: 100 } };
`;
};
