import type { Meta, StoryObj } from '@storybook/react';
import HeroSection, { FeatureBullet } from "../components/HeroSection";
import PrismImage from '../assets/images/prism.png';
import PrismFeatureBulletImage from '../assets/images/prism-feature-bullet.png';

const meta = {
  title: 'Components/Hero Section',
  component: HeroSection,
  decorators: [(story) => <div style={{ marginTop: '16px' }}>{story()}</div>],
  tags: ['autodocs'],
} satisfies Meta<typeof HeroSection>;

export default meta;
type Story = StoryObj<typeof HeroSection>

const FeatureBulletsItems: FeatureBullet[] = [
  {
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z"></path></svg>`,
    text: 'Minimum 5K image resolution',
  },
  {
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z"></path></svg>`,
    text: 'Various format variants available',
  },
  {
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z"></path></svg>`,
    text: 'Retina display support',
  }
];

export const Default: Story = {
  args: {
    title: 'Well crafted abstract images',
    body: 'High quality abstract images for your projects, wallpaper and presentations.',
    imgSrc: PrismImage,
    imgAlt: 'A purple and blue cube centered against a solid black background.',
  },
};

export const Simple: Story = {
  args: {
    title: 'Well crafted abstract images',
    body: 'High quality abstract images for your projects, wallpaper and presentations.',
    imgSrc: PrismImage,
    imgAlt: 'A purple and blue cube centered against a solid black background.',
  },
};

export const FeatureBullets: Story = {
  args: {
    title: 'Premium abstract images',
    featureBullets: FeatureBulletsItems,
    imgSrc: PrismFeatureBulletImage,
    imgAlt: 'A purple and blue cube centered against a solid black background.',
  },
};
