interface HeroSectionProps {
  title?: string;
  body?: string;
  featureBullets?: FeatureBullet[];
  imgSrc?: string;
  imgAlt?: string;
};

export interface FeatureBullet {
  svg: any;
  text: string;
};

const HeroSection = (props: HeroSectionProps) => {
  const { title, body, featureBullets, imgSrc, imgAlt } = props;

  return (
    <section className="w-full max-w-[1408px] py-14 tablet:py-[27px] desktop:py-[9px] hero-section hero-section--drop-shadow rounded-sm tablet:rounded-md">
      <h2 className="hidden">Hero Section</h2>
      {/* Container */}
      <div className="w-full px-3 tablet:px-4 py-12 tablet:py-16 desktop:py-24 desktop:px-24 desktop:flex desktop:flex-row desktop:justify-between desktop:items-center bg-white">
        {/* Top (mobile/tablet) and left side (Desktop) container */}
        <div className="mb-12 tablet:mb-8 desktop:mb-0 desktop:mr-8 desktop:max-w-[488px]">
          {title && <h3 className="font-semibold text-4xl tablet:text-5xl desktop:text-6xl text-neutral-900">{title}</h3>}
          {body && <p className="mt-4 tablet:mt-6 mb-8 tablet:mb-16 tablet:max-w-[540px] desktop:max-w-full tablet:font-base text-lg tablet:text-xl text-neutral-600">{body}</p>}
          {(featureBullets && featureBullets.length > 0) && (
            <ul className="mt-8 tablet:mt-16 mb-8 tablet:mb-16 flex flex-col gap-5">
              {featureBullets?.map((f: FeatureBullet) => (
                <li className="flex justify-start items-center text-lg font-normal text-neutral-600">
                  <div
                    className="mr-3 size-6 bg-indigo-50 rounded-full text-indigo-700"
                    dangerouslySetInnerHTML={{ __html: f.svg }}
                  />
                  {f.text}
                </li>
              ))}
            </ul>
          )}
          {/* Buttons */}
          <div className="flex justify-between tablet:justify-start">
            <button
              className="min-w-[151.5px] tablet:min-w-[213px] desktop:min-w-[175.5px] py-3 tablet:py-4 px-3 mr-4 tablet:mr-8 tablet:text-lg text-neutral-900 bg-white rounded-sm my-drop-shadow cursor-pointer outline-royal-blue hover:bg-neutral-50 focus:bg-neutral-50 focus:outline-4 disabled:bg-neutral-100 disabled:text-neutral-400"
              type="button"
            >
              Learn more
            </button>
            <button
              className="min-w-[151.5px] tablet:min-w-[213px] desktop:min-w-[175.5px] py-3 tablet:py-4 px-3 tablet:text-lg text-white bg-indigo-700 rounded-sm my-drop-shadow cursor-pointer outline-royal-blue hover:bg-indigo-800 focus:bg-indigo-800 focus:outline-4 disabled:bg-neutral-100 disabled:text-neutral-400"
              type="button"
            >
              See pricing
            </button>
          </div>
        </div>
        {/* Bottom (mobile/tablet) and right side (Desktop) image */}
        {(imgSrc && imgAlt) && (
          <div className="w-fill desktop:w-fit">
            <img
              className="w-full desktop:max-w-[696px] mx-auto desktop:mx-0"
              src={imgSrc}
              alt={imgAlt}
              loading="lazy"
            />
          </div>
        )}
      </div>
    </section>
  )
}

export default HeroSection;
