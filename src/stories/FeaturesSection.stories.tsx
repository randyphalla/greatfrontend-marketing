import type { Meta, StoryObj } from '@storybook/react';
import FeaturesSection, { FeatureSectionListItem } from "../components/FeaturesSection";
import FeatureSectionLeftImage from '../assets/images/unsplash:rAtzDB6hWrU_1.jpg';
import FeatureSectionRightImage from '../assets/images/unsplash:rAtzDB6hWrU.jpg';

const meta = {
  title: 'Components/Features Section',
  component: FeaturesSection,
  decorators: [(story) => <div className="mt-[16px]">{story()}</div>],
  tags: ['autodocs'],
} satisfies Meta<typeof FeaturesSection>;

export default meta;
type Story = StoryObj<typeof FeaturesSection>


export const Default: Story = {
  args: {
    text: "Best-in-class support",
    title: "Convenience and licensing that empowers",
    body: "In a world where storytelling constantly evolves, don't let licensing and poor support hold you down.",
    variant: "left",
    imgSrc: FeatureSectionLeftImage,
    imgAlt: "A vibrant wall featuring a blue, orange, and red color scheme, creating a lively and dynamic visual effect.",
    children: <>
      <FeatureSectionListItem
        icon={
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"><path d="M15.5018 20.0048C14.8432 21.5841 13.5794 22.848 12 23.5066C10.4206 22.848 9.15679 21.5841 8.49816 20.0048H10.7575C11.0838 20.4934 11.5051 20.9171 12 21.248C12.4949 20.9171 12.9162 20.4934 13.2425 20.0048H15.5018ZM18 14.8095L20 17.0777V19.0048H4V17.0777L6 14.8095V9.00478C6 5.52153 8.50442 2.55822 12 1.45999C15.4956 2.55822 18 5.52153 18 9.00478V14.8095ZM17.2692 17.0048L16 15.5653V9.00478C16 6.68694 14.4292 4.57431 12 3.58384C9.57078 4.57431 8 6.68694 8 9.00478V15.5653L6.73076 17.0048H17.2692ZM12 11.0048C10.8954 11.0048 10 10.1093 10 9.00478C10 7.90021 10.8954 7.00478 12 7.00478C13.1046 7.00478 14 7.90021 14 9.00478C14 10.1093 13.1046 11.0048 12 11.0048Z"></path></svg>
        }
        title="Faster downloads"
        paragraph="Our robust servers are primed to deliver the highest resolution images swiftly, ensuring a smooth download experience."
      />
      <FeatureSectionListItem
        icon={
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"><path d="M17 6C16.4477 6 16 5.55228 16 5C16 4.44772 16.4477 4 17 4C17.5523 4 18 4.44772 18 5C18 5.55228 17.5523 6 17 6ZM17 8C18.6569 8 20 6.65685 20 5C20 3.34315 18.6569 2 17 2C15.3431 2 14 3.34315 14 5C14 6.65685 15.3431 8 17 8ZM7 3C4.79086 3 3 4.79086 3 7V9H5V7C5 5.89543 5.89543 5 7 5H10V3H7ZM17 21C19.2091 21 21 19.2091 21 17V15H19V17C19 18.1046 18.1046 19 17 19H14V21H17ZM8 13C8 12.4477 7.55228 12 7 12C6.44772 12 6 12.4477 6 13C6 13.5523 6.44772 14 7 14C7.55228 14 8 13.5523 8 13ZM10 13C10 14.6569 8.65685 16 7 16C5.34315 16 4 14.6569 4 13C4 11.3431 5.34315 10 7 10C8.65685 10 10 11.3431 10 13ZM17 11C15.8954 11 15 11.8954 15 13H13C13 10.7909 14.7909 9 17 9C19.2091 9 21 10.7909 21 13H19C19 11.8954 18.1046 11 17 11ZM5 21C5 19.8954 5.89543 19 7 19C8.10457 19 9 19.8954 9 21H11C11 18.7909 9.20914 17 7 17C4.79086 17 3 18.7909 3 21H5Z"></path></svg>
        }
        title="Convenience for teams"
        paragraph="Your single account can accommodate multiple users simultaneously downloading without any disruptions, streamlining teamwork and productivity."
      />
      <FeatureSectionListItem
        icon={
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"><path d="M16.2877 9.42773C15.413 7.97351 13.8195 7 12 7 9.23999 7 7 9.23999 7 12 7 14.76 9.23999 17 12 17 13.8195 17 15.413 16.0265 16.2877 14.5723L14.5729 13.5442C14.0483 14.4166 13.0927 15 12 15 10.3425 15 9 13.6575 9 12 9 10.3425 10.3425 9 12 9 13.093 9 14.0491 9.58386 14.5735 10.4568L16.2877 9.42773ZM22 12C22 6.47998 17.52 2 12 2 6.47998 2 2 6.47998 2 12 2 17.52 6.47998 22 12 22 17.52 22 22 17.52 22 12ZM4 12C4 7.57996 7.57996 4 12 4 16.42 4 20 7.57996 20 12 20 16.42 16.42 20 12 20 7.57996 20 4 16.42 4 12Z"></path></svg>
        }
        title="Royalty-free licensing"
        paragraph="Our straightforward, royalty-free licensing means your chosen images are yours to innovate with, without the hassle of negotiating usage rights for every new project."
      />
    </>
  },
};

export const Left: Story = {
  args: {
    ...Default.args,
  },
};

export const Right: Story = {
  args: {
    text: "High quality images",
    title: "For designers, by designers",
    body: "Unleash boundless creativity with a large repository of images optimized for designers",
    variant: "right",
    imgSrc: FeatureSectionRightImage,
    imgAlt: "A 3D rendering of a glass tube featuring a gradient of blue and purple colors.",
    children: <>
      <FeatureSectionListItem
        icon={
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"><path d="M4 5V19H20V5H4ZM3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM7.5 11.25H9.5V9H11V15H9.5V12.75H7.5V15H6V9H7.5V11.25ZM14.5 10.5V13.5H16C16.2761 13.5 16.5 13.2761 16.5 13V11C16.5 10.7239 16.2761 10.5 16 10.5H14.5ZM13 9H16C17.1046 9 18 9.89543 18 11V13C18 14.1046 17.1046 15 16 15H13V9Z"></path></svg>
        }
        title="5K resolution support"
        paragraph="All images boast a minimum resolution of 5K, ensuring crisp, crystal-clear quality."
      />
      <FeatureSectionListItem
        icon={
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"><path d="M7.05025 8.04673L12 3.09698L16.9497 8.04673C19.6834 10.7804 19.6834 15.2126 16.9497 17.9462C14.2161 20.6799 9.78392 20.6799 7.05025 17.9462C4.31658 15.2126 4.31658 10.7804 7.05025 8.04673ZM18.364 6.63252L12 0.268555L5.63604 6.63252C2.12132 10.1472 2.12132 15.8457 5.63604 19.3604C9.15076 22.8752 14.8492 22.8752 18.364 19.3604C21.8787 15.8457 21.8787 10.1472 18.364 6.63252ZM16.2427 10.1714L14.8285 8.75718L7.7574 15.8282L9.17161 17.2425L16.2427 10.1714ZM8.11095 11.232C8.69674 11.8178 9.64648 11.8178 10.2323 11.232C10.8181 10.6463 10.8181 9.69652 10.2323 9.11073C9.64648 8.52494 8.69674 8.52494 8.11095 9.11073C7.52516 9.69652 7.52516 10.6463 8.11095 11.232ZM15.8891 16.8889C15.3033 17.4747 14.3536 17.4747 13.7678 16.8889C13.182 16.3031 13.182 15.3534 13.7678 14.7676C14.3536 14.1818 15.3033 14.1818 15.8891 14.7676C16.4749 15.3534 16.4749 16.3031 15.8891 16.8889Z"></path></svg>
        }
        title="From water to glass"
        paragraph="We offer a wide array of abstractions, ranging from water to glass, and encompassing various styles including 3D and vector."
      />
      <FeatureSectionListItem
        icon={
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"><path d="M12 4C18.0751 4 23 8.92487 23 15V20H21V15C21 10.1182 17.1132 6.14421 12.2654 6.00384L12 6C7.1182 6 3.14421 9.88681 3.00384 14.7346L3 15V20H1V15C1 8.92487 5.92487 4 12 4ZM12 8C15.866 8 19 11.134 19 15V20H17V15C17 12.3112 14.8777 10.1182 12.2169 10.0046L12 10C9.31124 10 7.11818 12.1223 7.00462 14.7831L7 15V20H5V15C5 11.134 8.13401 8 12 8ZM12 12C13.6569 12 15 13.3431 15 15V20H13V15C13 14.4872 12.614 14.0645 12.1166 14.0067L12 14C11.4872 14 11.0645 14.386 11.0067 14.8834L11 15V20H9V15C9 13.3431 10.3431 12 12 12Z"></path></svg>
        }
        title="Portrait or landscape"
        paragraph="Effortlessly adapt your images for any platform - whether it's a stunning wallpaper or captivating Instagram reels and stories."
      />
    </>
  },
};
