import Image from "next/image";
export default function Testimonial() {
  return (
    <section
      className="relative isolate overflow-hidden bg-black px-6 py-2 sm:py-32 lg:px-8 mt-2"
      id="testimonial"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-black shadow-xl shadow-indigo-600/10 ring-1 ring-black sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-7xl lg:max-w-6xl">
        {/* <Image alt="some image"
        src={'/'}/> */}
  <h1 className="text-5xl text-gray-200 font-bold mb-11  p-4 max-w-xs lg:max-w-xs text-center">Benefits</h1>
  <div className="flex flex-wrap justify-center items-center">
    <div className="w-full sm:w-1/2 lg:w-1/3 text-lg font-semibold border-2 border-blue-600 shadow-lg shadow-blue-600 rounded-lg px-4 py-6 text-white m-3 max-w-xs lg:max-w-xs">
      Accelerated Growth
      <p className="text-base font-normal">
        Our scalable method and dozens/hundreds of accounts help you achieve
        the reach and pace you desire.
      </p>
    </div>
    <div className="w-full sm:w-1/2 lg:w-1/3 text-lg font-semibold border-2 p-2 border-blue-600 shadow-lg shadow-blue-600 rounded-lg text-white px-4 py-6 m-3 max-w-xs lg:max-w-xs">
      Boost Your Reputation and Social Proof
      <p className="text-base font-normal">
        Grow your Instagram following and increase trust and brand recognition.
      </p>
    </div>
    <div className="w-full sm:w-1/2 lg:w-1/3 text-lg font-semibold border-2 p-2 border-blue-600 shadow-lg shadow-blue-600 rounded-lg text-white px-4 py-6 m-3 max-w-xs lg:max-w-xs">
      Completely Safe
      <p className="text-base font-normal">
        Keep your account compliant with Instagram&apos;s terms of use, so you can
        focus on growing with 0 risk.
      </p>
    </div>
  </div>
  <div className="flex flex-wrap justify-center items-center">
    <div className="w-full sm:w-1/2 lg:w-1/2 text-lg font-semibold border-2 p-2 border-blue-600 shadow-lg shadow-blue-600 rounded-lg text-white px-4 py-6 m-3 max-w-lg lg:max-w-md">
      Password-Free and Hands-Free
      <p className="text-base font-normal">
        We promote your account securely without ever accessing your
        credentials, so you maintain full control without extra work.
      </p>
    </div>
    <div className="w-full sm:w-1/2 lg:w-1/2 text-lg font-semibold border-2 p-2 border-blue-600 shadow-lg shadow-blue-600 rounded-lg text-white px-4 py-6 m-3 max-w-lg lg:max-w-lg">
      Laser-Targeting for Maximum Impact
      <p className="text-base font-normal">
        Precisely reach your target audience with our multiple targeting
        options: followers, following, geolocation and hashtags. You can even
        steal your competitors&apos; followers!
      </p>
    </div>
  </div>
  <div className="flex flex-wrap justify-center items-center">
    <div className="w-full sm:w-1/2 lg:w-1/2 text-lg font-semibold border-2 p-2 border-blue-600 shadow-lg shadow-blue-600 rounded-lg text-white px-4 py-6 m-3 max-w-lg lg:max-w-lg">
      Grow your Sales & Leads
      <p className="text-base font-normal">
        Your profile will experience an influx of new followers who are already
        interested in the niche you specialize in. Through an authentic and
        efficient approach, these followers will be transformed into engaged
        fans and customers.
      </p>
    </div>
    <div className="w-full sm:w-1/2 lg:w-1/2 text-lg font-semibold border-2 p-2 border-blue-600 shadow-lg shadow-blue-600 rounded-lg text-white px-4 py-9 m-3 max-w-lg lg:max-w-md">
      Real and Active Followers
      <p className="text-base font-normal">
        Get people who will engage with your content over the long term and are
        most likely to become brand advocates or paying customers in the future
      </p>
    </div>
  </div>
</div>
<div className="flex justify-items-center items-center flex-wrap bg-black">

        <Image
            className='h-64 w-64 mx-auto'
            alt='Asset-2'
            src={'/asset-2.png'}
            width={500}
            height={500}
            />
        <Image
            className='h-96 w-60 mx-auto'
            alt='Asset-3'
            src={'/asset-3.png'}
            width={500}
            height={500}
            />

            </div>
    </section>
  );
}
