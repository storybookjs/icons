import type { Meta, StoryObj } from '@storybook/react';

import { CertificateIcon } from './CertificateIcon';

const meta: Meta<typeof CertificateIcon> = {
  component: CertificateIcon,
};

export default meta;
type Story = StoryObj<typeof CertificateIcon>;

export const Default: Story = { args: { size: 100 } };
