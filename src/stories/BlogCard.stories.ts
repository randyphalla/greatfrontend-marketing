import BlogCard from "../components/BlogCard";
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta = {
  title: 'Blog Card',
  component: BlogCard,
  parameters: {},
  tags: [],
  argTypes: {},
  args: {
    onClick: fn()
  },
} satisfies Meta<typeof BlogCard>;

export default meta;
type Story = StoryObj<typeof BlogCard>

export const Primary: Story = {
  args: {},
};
