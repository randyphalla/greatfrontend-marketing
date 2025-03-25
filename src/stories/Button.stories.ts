import type { Meta, StoryObj } from '@storybook/react';
import Button from "../components/Button";

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {},
  tags: [],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    text: 'Contact me'
  },
};

export const Disabled: Story = {
  args: {
    text: 'Contact me',
    isDisabled: true,
  },
};
