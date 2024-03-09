import MoveToTop from "components/MoveToTop"
import Image from "next/image"
import Link from "next/link"
import React from "react"


const engagement = [
  {
    count: 1,
    keywords: 'If any of the following words are included in your last tweet: "Giveaway, NFTGiveaway, Contest(s), Tag, Interact, Interaction(s), RT(s), Like(s), Comment(s), Share, Follow(s)", NFT accounts will engage according to the ratio you have set for Comments/Likes/RTs (maximum engagement (100%)).'
  },
  {
    count: 2,
    keywords: 'If the tweet contains "AMA" or "ama", comments about the AMA will be written by child accounts instead of generic comments.'
  },
  {
    count: 3,
    keywords: 'If the tweet contains "Join Discord", comments about the Discord will be written by child accounts instead of the usual list.'
  },
  {
    count: 4,
    keywords: 'If the tweet contains "Partnership" or "Collab" or "Collaborations", comments about collaborations will be written by child accounts.'
  },  
  {
    count: 5,
    keywords: 'If the tweet contains "Drop your MetaMask address", child accounts will comment with a random MetaMask address.'
  },  
  {
    count: 6,
    keywords: 'If the tweet contains "Genesis collection" or "genesis NFT" or "our collection", child accounts will write a comment about your NFT collection.'
  },  
  {
    count: 7,
    keywords: 'If the tweet contains "our article" or "our blog", child accounts will write a generic comment about your blog.'
  },  
  {
    count: 8,
    keywords: 'If the tweet contains "NFT gallery", child accounts will write a comment about your NFT gallery.'
  },  
  {
    count: 9,
    keywords: 'If the tweet contains "Metaverse", child accounts will write a comment about the Metaverse.'
  },  
  {
    count: 10,
    keywords: 'If the tweet contains "Gm", child accounts will write a "Hello/gm" comment. One space is needed after Gm. Examples: "Gm", "Gm John", "Gm all". Avoid "Gm.", "Gm!", etc.'
  },  
  {
    count: 11,
    keywords: 'If the tweet contains "launch", child accounts will write comments accordingly.'
  },  
  {
    count: 12,
    keywords: 'If the tweet contains "Spot" or "Spots", child accounts will write a comment expressing interest in finding a spot.'
  },  
  {
    count: 13,
    keywords: 'If the tweet contains "Presale", child accounts will comment asking about price expectations after the presale.'
  },  
  {
    count: 14,
    keywords: 'If the tweet contains "$BNB" or "$BNBX", child accounts will comment with your token symbol (e.g., "$XXX" or "$XXXX").'
  },
  {
    count: 15,
    keywords: "Tags/Mentions: Max 3 per comment, Replace X with the number you want. Don't ask for 'tag 4 people'. (If instruction is found they will tag the number of people according to your instruction: bot(s) from our network for Essential package or directly scraped user(s) from your targets for Launch & Elevate package). Replace X with the number you want. Tag X | Mention X | Mention a friend | Tag a friend | Tag your friends | Mention your friends | Tag friends | Mention friends"
  },
]

const tableData = [
  { competitor: 'Competitor1', followerAmount: '2.4k' },
  { competitor: 'Competitor2', followerAmount: '32k' },
]


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
]

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
          <h2 className="font-bold text-center pb-4">
            Bulk discounts are available for large orders.
          </h2>
          <p className="font-light text-center">
            You can stack multiple packages. Each package is for a volume of 200
            accounts at your disposal. You can order for thousands of them to
            max out interactions and outreach/DMs capacities!
          </p>
        </div>
      </section>

      <section className="mt-36 bg-blue-100 text-black max-w-7xl mx-auto shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]">
        <h1 className="text-2xl font-bold mb-4 text-center pt-10">
          How It Works
        </h1>
        <ol className="px-14 pb-14 max-w-5xl mx-auto text-center">
          <li className="border-dashed border-2 p-4 border-blue-900">
            Within the course of 30 days, you can post as much as you like. Our
            Twitter NFT accounts will engage (like, retweet & comment) on all
            your new Tweets. To get the maximum amount of engagements we
            recommend you wait up to 24 hours between each new Tweets.
          </li>
          <p className="text-3xl font-extrabold text-black">&darr;</p>
          <li className="border-dashed border-2 p-4 border-blue-900">
            Our accounts engage like real humans it will take time for all
            engagement to build as it does with real audience. To receive
            engagements on the last Tweet, make sure that you haven&apos;t
            pinned anything. Our NFT accounts always engage with pinned Tweet
            first. Want to get engagement on any other Tweet besides the latest
            one? Just pin the Tweet and unpin after engagement has arrived. If
            there are 2 tweets that were posted at exactly the same time, one
            after another, only the last tweet will receive engagement.
          </li>
          <p className="text-3xl font-extrabold text-black">&darr;</p>
          <li className="border-dashed border-2 p-4 border-blue-900">
            Use any keyword from the "anchor keyword" list and receive
            comments about that subject. e.g. include a keyword "TAG
            3" in your post, and our NFT profiles will tag 3 accounts under
            your tweet (if you have Launch or Elevate package).
          </li>
          <p className="text-3xl font-extrabold text-black">&darr;</p>
          <li className="border-dashed border-2 p-4 border-blue-900">
            You can come with custom comments of your own, otherwise, we will
            use our standard "anchor keyword" list.
          </li>
        </ol>
      </section>

      <section className="flex max-w-7xl mx-auto my-32 p-10 text-center flex-wrap">
        <div className="border-white border-2 p-10  bg-gradient-to-r from-gray-500 to-blue-700 max-w-xl">
          <h1 className="font-bold text-xl mb-4">
            Targeting Possibilities for “Launch” & “Elevate” Package
          </h1>
          <div>
            <strong>Followers or Following</strong> Choose your competitors
            Projects or individuals having the followers you&apos;d like to
            have. We will scrape (= get) all of their followers, then manually
            select the ones that appear to be organic: only those with an
            avatar, and with 10 to 8000 followers.
            <br /> Provide the list as such:
          </div>
          <br />
          <br />
          <table className="mx-auto">
          <tbody>
            <tr>
              <th>[Competitor] =&gt </th>
              <th>[follower amount]</th>
            </tr>
            {tableData.map((item) => (
              <tr key={item.competitor}>
                <td>{item.competitor}</td>
                <td>{item.followerAmount}</td>
              </tr>
            ))}
            </tbody>
          </table>
          <br />
          <br />
          <div>
            …Until we reach a sum of minimum 300k TOTAL per package. So if you
            buy 3, we&apos;ll need 900K followers to scrape.
          </div>
        </div>
        <div className="w-10"></div>
        <div className="border-white border-2 p-10 bg-gradient-to-r from-blue-700 to-gray-500 max-w-xl">
          <h1 className="font-bold text-xl mb-4">Campaign Set-up</h1>
          <p>
            If you chose an outreach package, we&apos;ll scrape the followers of
            your competitors.
            <br /> It will take 3-5 business days. But for any package, we can
            start the engagement interaction usually within 48 hours.
            <br />
            <br />
            1. Choose Package(s) and quantity: Example: 3 Essential
            <br />
            2. Give us your Twitter profile link for automatic engagement
            https://twitter.com/example.
            <br />
            3. Complete the Automatic Engagement Form (we&apos;ll send you a
            link to it)
          </p>
          <Image
            alt="twitter-new"
            src={"/twitternew.png"}
            width={200}
            height={200}
            className=" h-16 w-16 mx-auto mt-10"
          />
        </div>
      </section>


      <section>
              <h1 className="font-bold text-3xl text-center pb-14">Engagement Keywords</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 text-center">
                  
                  {engagement.map((element, i)=> {
                    return (
                      <div key={i} className={`border-gray-200 border-2 m-2 max-w-xl flex flex-col justify-center p-6 ${i%2 == 0 ? 'bg-white text-black' : 'bg-black'}`}>
                      <span className="text-blue-600">{element.count}</span>
                      <div>{element.keywords}</div>
                      </div>
                    )
                  })}
                </div>
      </section>


        <section>
          <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
            {/* <Image src="/twitter-bg.jpg" alt="twitter-bg" className="" width={300} height={300}/> */}
            
              <h1 className="font-bold text-3xl text-center pb-10">Reassurance & Social Proof</h1>
            <div className="flex mx-10 flex-wrap">
              <div className="mx-2 max-w-xs">
              <h2 className="font-semibold border-b-2 border-white pb-4">Trusted Growth Partners Since 2020</h2>
              <p className="pt-4">We&apos;;ve a proven track record and delivered quantifiable results to hundreds of NFT & Token projects through continually refined social strategies.</p>
              </div>

              <div className="mx-2 max-w-sm">
              <h2 className="font-semibold border-b-2 border-white pb-4">+40 Successful Mint & +130 projects boosted.</h2>
              <p className="pt-4">We&apos;;ve proven our expertise at scale by partnering with a diversity of NFT & Token Marketing Projects to expand reach, boost engagement, and get them successful Mint and Launch since 2020.</p>
              </div>

              <div className="mx-2 max-w-xs">
              <h2 className="font-semibold border-b-2 border-white pb-4">Continuous Testing & Refinement</h2>
              <p className="pt-4">Our dedicated team tests our services daily to optimize campaigns, provide seamless support, and ensure uninterrupted service since 2020.</p>
              </div>

              <div className="mx-2 max-w-xs">
              <h2 className="font-semibold border-b-2 border-white pb-4">Experience You Can Rely On</h2>
              <p className="pt-4">With thousands of man-hours invested in social research since 2020, our insights and customized plans yield quantifiable growth.</p>
              </div>

            </div>
            <div className="max-w-md mx-auto mt-20 text-center">
              <h1 className="font-bold text-3xl text-center pb-6">Incentive</h1>
              <p className="">Marketing NFTs and tokens effectively requires sizable investments of time, funding, and manpower. However, success in this dynamic space is anything but guaranteed.</p>
              <p className="mb-10">NFT and crypto communities are fickle, preferences change overnight. Platform algorithms also shift constantly, making it near impossible to reliably win visibility through organic reach alone.</p>
              <Link href={'/#'} className="hover:text-blue-400 hover:underline">No more guesses, take back control with us now &gt;</Link>
            </div>
          </div>
        </section>

      <MoveToTop />
    </div>
  )
}

export default index
