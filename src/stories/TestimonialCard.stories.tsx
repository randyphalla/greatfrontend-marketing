import type { Meta, StoryObj } from '@storybook/react';
import TestimonialCard from "../components/TestimonialCard";

const meta = {
  title: 'Components/Testimonial Card',
  component: TestimonialCard,
  decorators: [(story) => <div style={{ marginTop: '200px' }}>{story()}</div>],
  tags: ['autodocs'],
} satisfies Meta<typeof TestimonialCard>;

export default meta;
type Story = StoryObj<typeof TestimonialCard>

export const Default: Story = {
  args: {},
};
