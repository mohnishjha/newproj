import Image from "next/image";

const logos = [
  {
    src: "/bar-chart.png",
    alt: "Bar Chart",
  },
  {
    src: "/monitor.png",
    alt: "Tools",
  },
  {
    src: "/email.png",
    alt: "Email",
  },
  {
    src: "/transparency.png",
    alt: "Transparency",
  },
  {
    src: "/content.png",
    alt: "Content",
  },
];

export default function Client() {
  return (
    <div className="bg-gray-200 py-24 sm:py-32" id="work">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-4xl font-semibold leading-8 text-gray-900">
        Our Process
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          {logos.map((logo, index) => (
            <Image
              key={index}
              className="col-span-2 max-h-20 w-full object-contain lg:col-span-1 "
              src={logo.src}
              alt={logo.alt}
              width={158}
              height={48}
            />
          ))}
        </div>
      </div>

            <div>
              <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 mt-8 mx-10">
                <div className="font-bold border-r-2  border-black">Define Your Objectives<p className="font-thin
                ">Contact us to outline the key performance indicators you seek to optimize through our expertise, such as followers, leads or brand awareness.</p></div>
                <div className="font-bold border-r-2  border-black">Select Your Package<p className="font-thin">Choose between our Launch or Elevate programs tailored for Twitter dominance. Or consider Reach or Reach AI for Instagram mastery.
                Want increased brand awareness and engagement rather than traffic? Inquire about our Engagement AI package for Instagram and Essential package for Twitter.</p></div>
                <div className="font-bold">Refine Your Target & Message<p className="font-thin">You went for a growth package: send over the targeting option to reach the audiences you want to captivate via related accounts/hashtags/locations. As well as the direct message you&apos;d like us to deploy as part of your campaign.</p></div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 mt-8 mx-10">
                <div className="font-bold border-r-2  border-black">Campaign Ignition<p className="font-thin">Our growth packages typically require 3-5 business days for thorough preparation and scraping before activation. Engagement AI (Instagram) or Essential (Twitter) however can start almost immediately</p></div>
                <div className="font-bold border-r-2  border-black">Monitor, Control and Magnify<p className="font-thin">Our team maintains around-the-clock vigilance through meticulous analytical review to continuously refine efforts for unparalleled results.</p></div>
                <div className="font-bold">Analytics & Report<p className="font-thin">For our growth packages, you&apos;ll receive a detailed report analyzing progress made towards key performance indicators and overall account growth.</p></div>
              </div>
            </div>

    </div>
  );
}
