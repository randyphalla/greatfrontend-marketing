
# GreatFrontEnd Projects - Marketing
> Built with React, Tailwind CSS, Storybook and Vite

## Getting Started
- `yarn install` | install node_modules
- `yarn dev` | run project at `http://localhost:5173/`
- `yarn storybook` | run storybook at `http://localhost:6006/`

## Building
- `yarn build` | build project
- `yarn build-storybook` | build storybook

## Hosting
- https://greatfrontend-marketing.vercel.app/

## Marketing (Components)
- [x] [Testimonial Card](https://greatfrontend-marketing.vercel.app/?path=/story/components-testimonial-card--default)
- [x] [Blog Card](https://greatfrontend-marketing.vercel.app/?path=/story/components-blog-card--default)
- [x] [Profile Card](https://greatfrontend-marketing.vercel.app/?path=/story/components-profile-card--default)
- [x] [Hero Section (Simple)](https://greatfrontend-marketing.vercel.app/?path=/story/components-hero-section--simple)
- [x] [Hero Section (Feature Bullets)](https://greatfrontend-marketing.vercel.app/?path=/story/components-hero-section--feature-bullets)
- [x] [Features Section (Side image) - Left](https://greatfrontend-marketing.vercel.app/?path=/story/components-features-section--left)
- [x] [Features Section (Side image) - Right](https://greatfrontend-marketing.vercel.app/?path=/story/components-features-section--right)
- [x] [Features Section (Grid)](https://greatfrontend-marketing.vercel.app/?path=/story/components-features-section--grid)
- [] [Pricing Section (Single)]()
- [] [Pricing Section (Tiers)]()
- [] [Statistics Section]()
- [] [Contact Section]()
- [] [Team Section]()
- [] [404 Section]()
- [] [FAQ Section]()
- [] [Testimonials Section]()
- [] [Logo Marquee Section]()
- [] [Cookie Consent]()
- [] [Footer Section]()
- [] [Marketing Landing Page]()
- [] [Features Page]()
- [] [Pricing Page]()
- [] [About Us Page]()
- [] [Contact Us Page]()
- [] [Marketing Website]()

## Design System
- [x] [Button](https://greatfrontend-marketing.vercel.app/?path=/story/components-button--default)

## Icons
- https://remixicon.com/

## Problem

https://github.com/storybookjs/storybook/issues/20876#issuecomment-1542668305
- If storybook is not running, remove `.pnp.js` from your home directory

## Mock-up without figma file

```
// import imageMobile from '../assets/designs/FeaturesSection-Grid/Mobile.jpg';
// import imageTablet from '../assets/designs/FeaturesSection-Grid/Tablet.jpg';
// import imageDesktop from '../assets/designs/FeaturesSection-Grid/Desktop.jpg';

<>
  ....
  {/* Mockup */}
  <div
    className="absolute top-0 left-0 right-0 mx-auto h-[1000px] desktop:h-[850px] w-[375px] tablet:w-[768px] desktop:w-[1440px] bg-cover bg-no-repeat bg-left-top z-[1] opacity-[0.2]"
    style={{ backgroundImage: `url(${imageDesktop})` }}
  />
<>
```
