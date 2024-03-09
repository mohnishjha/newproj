import MoveToTop from "components/MoveToTop";
import Image from "next/image";
import React from "react";

const table = [
  {
    essential: "Essential",
    one: "Engagement Only",
    two: "Keyword Triggered Interactions",
    three: "",
    four: "",
    five: "",
    six: "",
    seven: "Aged & NFT/Token accounts",
    eight: "No Password required",
    nine: "200 accounts/30days/400€",
  },
  {
    essential: "Launch",
    one: "Engagement + Outreach",
    two: "Keyword Triggered Interactions",
    three: "Tag scraped users on command (up to 600 per day with 200 accounts)",
    four: "",
    five: "",
    six: "",
    seven: "Aged & NFT/Token accounts",
    eight: "No Password required",
    nine: "200 accounts/30days/650€",
  },
  {
    essential: "Elevate",
    one: "Engagement + Outreach",
    two: "Keyword Triggered Interactions",
    three: "Tag scraped users on command (up to 600 per day with 200 accounts)",
    four: "Mass DMs, Follows, Likes, Comments to profile/posts of the scraped users(up to 600 per day with 200 accounts)",
    five: "RT quote tags (up to 600 per day with 200 accounts)",
    six: "RT dedicated at the top of our accounts feed",
    seven: "Aged & NFT/Token accounts",
    eight: "No Password required",
    nine: "200 accounts/30days/1150€",
  },
];

const index = () => {
  return (
    <div className="text-white">
      <div className="text-center flex flex-col mx-10 py-32 md:mb-32">
        <h1 className="font-bold text-4xl mb-2">X Auto Engagement</h1>
        <h2 className="text-2xl font-medium mb-10">(formerly Twitter)</h2>
        <p className="mb-10">X Auto Engagement & Outreach Services</p>
        <p className="">
          Don&apos;t go unnoticed: stand out from the competition, get your
          project the hype it deserves. <br />
          Get seen by millions to grow a solid community of loyal fans &
          investors.
        </p>
      </div>
      <div className="flex justify-around items-center flex-wrap mx-10">
        <div>
          <Image alt="image" src={"/asset-1.png"} width={300} height={300} />
        </div>
        <div className="">
          <h2 className="font-semibold text-lg">Accelerated Growth</h2>
          <p className=" font-thin mb-4 border-b-2 border-b-gray-400 pb-4">
            Our scalable method and dozens/hundred of accounts help you achieve
            the
            <br /> reach and pace you desire.
          </p>

          <h2 className="font-semibold text-lg text-right">
            Boost Your Reputation and Social Proof
          </h2>
          <p className=" font-thin mb-4 border-b-2 border-b-gray-400 pb-4 text-right">
            Grow your Twitter Project and increase trust and brand recognition.
          </p>

          <h2 className="font-semibold text-lg">Password-free</h2>
          <p className=" font-thin mb-4 border-b-2 border-b-gray-400 pb-4">
            We promote your account securely without ever accessing your
            credentials.
          </p>

          <h2 className="font-semibold text-lg text-right">
            Laser-Targeting for Maximum Impact (for Outreach package)
          </h2>
          <p className="  font-thin mb-4 border-b-2 border-b-gray-400 pb-4 text-right">
            Precisely reach your target audience with our multiple targeting
            options: followers,
            <br /> following, geolocation, and hashtags. You can even steal your
            competitors&apos; followers!
          </p>

          <h2 className="font-semibold text-lg">Create Hype and FOMO</h2>
          <p className="  font-thin mb-4 border-b-2 border-b-gray-400 pb-4">
            Create a solid community of people who will engage with your content
            over
            <br /> the long term and are most likely to become shillers and
            investors in the future.
          </p>

          <h2 className="font-semibold text-lg text-right">
            Increase your Mints & Sales
          </h2>
          <p className="  font-thin mb-4  text-right">
            Your profile will experience an influx of new followers who are
            already interested in your project
            <br /> and who have been hyped by our accounts promoting you. Take a
            moment to imagine
            <br /> them already FOMOing your project.
          </p>
        </div>
      </div>

      <section>
        <div className="px-2 py-2 md:px-6 md:py-10 mt-10">
          <h1 className="text-2xl font-bold capitalize  lg:text-3xl text-center">
            Packages
          </h1>
          <p className="my-4 text-gray-100 text-center">
            Our packages come in 2 options: Engagement Only or with Outreach.
          </p>
          <hr />
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:mt-12 xl:grid-cols-3 xl:gap-16">
            {table.map((element, i) => (
              <div key={i} className="space-y-4 mx-24 text-center">
                <h1 className=" text-xl font-semibold capitalize border-gray-700 border-b-2 pb-3">
                  {element.essential}
                </h1>
                <p className="text-sm text-gray-300">{element.one}</p>
                <p className="text-sm text-gray-300">{element.two}</p>
                <p className="text-sm text-gray-300">{element.three}</p>
                <p className="text-sm text-gray-300">{element.four}</p>
                <p className="text-sm text-gray-300">{element.five}</p>
                <p className="text-sm text-gray-300">{element.six}</p>
                <p className="text-sm text-gray-300">{element.seven}</p>
                <p className="text-sm text-gray-300">{element.eight}</p>
                <p className="text-sm text-gray-300">{element.nine}</p>
              </div>
            ))}
          </div>
        </div>

          <div className="border-blue-500 border-2 max-w-3xl p-4 mx-auto">
            <h2 className="font-bold text-center pb-4">Bulk discounts are available for large orders.</h2>
            <p className="font-light text-center">You can stack multiple packages. Each package is for a volume of 200 accounts at your disposal. You can order for thousands of them to max out interactions and outreach/DMs capacities!</p>
          </div>
      </section>

      <section className="mt-36 bg-white text-black max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold mb-4 text-center pt-10">How It Works</h1>
        <ol className="list-disc list-outside px-14 pb-14 max-w-5xl mx-auto ">
          <li className="list-item">Within the course of 30 days, you can post as much as you like. Our Twitter NFT accounts will engage (like, retweet & comment) on all your new Tweets. To get the maximum amount of engagements we recommend you wait up to 24 hours between each new Tweets.</li>
          <li>Our accounts engage like real humans; it will take time for all engagement to build as it does with real audience. To receive engagements on the last Tweet, make sure that you haven&apos;t pinned anything. Our NFT accounts always engage with pinned Tweet first. Want to get engagement on any other Tweet besides the latest one? Just pin the Tweet and unpin after engagement has arrived. If there are 2 tweets that were posted at exactly the same time, one after another, only the last tweet will receive engagement.</li>
          <li>Use any keyword from the &quot;anchor keyword&quot; list and receive comments about that subject. e.g. include a keyword &quot;TAG 3&quot; in your post, and our NFT profiles will tag 3 accounts under your tweet (if you have Launch or Elevate package).</li>
          <li>You can come with custom comments of your own, otherwise, we will use our standard &quot;anchor keyword&quot; list.</li>
        </ol>
      </section>

      <MoveToTop />


    </div>
  );
};

export default index;
