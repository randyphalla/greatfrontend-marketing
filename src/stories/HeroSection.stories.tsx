import type { Meta, StoryObj } from '@storybook/react';
import HeroSection from "../components/HeroSection";

const meta = {
  title: 'Components/Hero Section',
  component: HeroSection,
  decorators: [(story) => <div style={{ marginTop: '200px' }}>{story()}</div>],
  tags: ['autodocs'],
} satisfies Meta<typeof HeroSection>;

export default meta;
type Story = StoryObj<typeof HeroSection>

export const Default: Story = {
  args: {},
};
