import BlogCard from "../components/BlogCard";
import type { Meta, StoryObj } from '@storybook/react';
import BlogImage from '../assets/images/spacejoy-YqFz7UMm8qE-unsplash.jpg';

const meta = {
  title: 'Components/Blog Card',
  component: BlogCard,
  decorators: [(story) => <div style={{ marginTop: '120px' }}>{story()}</div>],
  parameters: {
    // https://storybook.js.org/docs/configure/story-layout
    // layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {},
} satisfies Meta<typeof BlogCard>;

export default meta;
type Story = StoryObj<typeof BlogCard>

export const Default: Story = {
  args: {
    imgSrc: BlogImage,
    imgAlt: 'A cozy living room featuring a gray couch, a decorative rug, and a stylish coffee table.',
    badgeText: 'Interior',
    title: 'Top 5 Living Room Inspirations',
    body: 'Curated vibrants colors for your living, make it pop & calm in the same time.',
    linkTitle: 'Read more',
    linkHref: '#',
  },
};
