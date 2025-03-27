import ProfileImage from "../assets/images/profile.png";

const TestimonialCard = () => {
  return (
    <div className="w-[340px] bg-white my-drop-shadow rounded-md">
      {/* container */}
      <div className="p-6">
        <div className="flex mb-4">
          <img
            className="size-[48px] mr-4"
            src={ProfileImage}
            alt="A smiling woman wearing glasses stands in front of a white brick wall, exuding a cheerful and friendly demeanor."
            loading="lazy"
          />
          <div className="">
            <h2 className="mb-[1px] font-semibold text-lg">Sarah Dole</h2>
            <p className="font-normal text-sm text-neutral-600">@sarahdole</p>
          </div>
        </div>
        <div className="">
          <p className="font-normal text-base text-neutral-600">I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!</p>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard;
