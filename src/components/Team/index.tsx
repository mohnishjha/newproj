
import { ChevronDown, ChevronUp, X } from 'lucide-react'
import Link from "next/link";
import { useState } from "react";

const proof = [
  {
    name: "Trusted Growth Partners",
    role: "We've a proven track reccord and delivered quantifiable results to hundreds of clients across many industries through continually refined social strategies.",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "230+ Brands Empowered",
    role: "We've proven our expertise at scale by partnering with a diversity of businesses to expand reach, boost engagement and increase revenus & leads since 2020.",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Continuous Testing & Refinement",
    role: "Our dedicated team tests our services daily to optimize campaigns, provide seamless support and ensure uninterrupted service since 2020",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Experience You Can Rely On",
    role: "With thousands of man-hours invested in social research since 2020, our insights and customized plans yield quantifiable growth.",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

const incentive = [{
  what: "Mastering social media demands huge investments of time, money and resources. All without certainty that your efforts will convert or perform consistently against unpredictable algorithms.",
  url: "No more guesses, take back control with us now >",
  heading: "Incentive"
}]

const faq = [
  {
    question: "How many followers can I expect to gain per month?",
    answer: "Please refer to the estimated range indicated on the product page for the selected service. Each account is unique and results can vary depending on factors outside of our control, such as the quality and consistency of published content, the niche you are in and especially the relevance of your targeting to the intended audience, which can positively or negatively influence growth. For example, an influencer will naturally grow more than a car dealership using the same service. For the first order, we cannot guarantee exact figures, we only provide indicative estimates. This is why we invite you to first test our cheapest package in an accelerated 7-day version to evaluate your potential growth. This way, we'll be able to guarantee a precise minimum growth for subsequent orders."
  },
  {
    question: "Is there a guarantee?",
    answer: "Yes, we guarantee a minimum number of followers, except for the first order, which should be used as a test to estimate your potential for growth and for which we only provide indicative estimates. You will receive a minimum guaranteed number of followers tailored to your next orders based on the results obtained during this test. We first invite you to test our cheapest package in an accelerated 7-day version to evaluate your potential growth. This allows us to properly analyze the engagement levels and growth patterns on your account during the test period. From there, we can more accurately guarantee a minimum number of followers or other metrics for future campaigns once we understand your specific account's performance and potential. The test is important to establish a customized guaranteed baseline for each individual client."
  },
  {
    question: "Can I get blocked?",
    answer: "It is simply not possible for our password-less services, simply because no actions are taken from your account, so there is nothing that could violate Instagram's terms of service."
  },
  {
    question: "Is the investment worth it?",
    answer: "It has now become very rare to experience organic success and obtain qualified followers on Instagram. Most services sell fake likes, fake followers that harm your account, reach and brand image. We do not sell any of that. Our methods allow you to gain authentic, qualified followers and leads without spending money on useless promotions. You will benefit from solutions that work without wasting time trying to self-generate this traffic. Manually growing your audience through conventional organic posting alone is an endless time sink with minimal results. Our specialized promotional management provides consistent, measurable growth at a fair cost that translates directly into new potential customers and sales for your business. You receive dedicated support from experts optimized campaigns to surpass competition without effort on your part. The investment in outsourcing growth to our proven process frees you to focus on core operations, confident your presence and visibility online increases daily through our autonomous work behind the scenes."
  },
  {
    question: "How can I contact support to ask my questions?",
    answer: (
      <>
      Our team is available 7 days a week and responds within a few hours on Telegram at @tasteful_agency
      or alternatively by email at{' '}
      <Link className='text-blue-600' href="mailto:support@socialswarm.io">support@socialswarm.io</Link>{' '}
      with responses generally within 48 hours. Rest assured that whether you message us on Telegram or email,
      a dedicated account manager will promptly address any inquiries you have about our services, packages,
      campaign set-up or optimization. We&apos;re committed to providing timely support to ensure a seamless experience
      and the best possible growth results. Don&apos;t hesitate to reach out with any questions - our team of experts
      is here to help guide you to success.
    </>
        ),
  },
  {
    question: "When will I be charged?",
    answer: "We require payment upfront to initiate the order. You will be billed via Stripe, which is beneficial for both you and us by providing unmatched security and ease of payment. We aim to make the payment and setup process as simple and seamless as possible."
  },
  {
    question: "How often should I post to get the most out of the service?",
    answer: "We recommend consistent posting, ideally at least twice a week. Quality content posted frequently will yield the best results from our services. However, be mindful not to overdo it, as posting multiple times a day may overwhelm your followers."
  },
  {
    question: "Can I specify who I would like you to target?",
    answer: "Yes, you can! When getting started, we ask you to provide similar Instagram account usernames to target their followers and/or following and/or locations, and/or hashtags. Most often, you should target similar Instagram accounts which could be your competitors, analogous profiles, or any pages whose audiences you feel align with your ideal client. We can scrape followers/likers from their profiles or accounts they follow. We can also target users who have posted with a specific hashtag or within a specific geolocation. For example, with #taxes, we target users who have posted content containing this hashtag."
  },
  {
    question: "Can you target by location?",
    answer: "Yes, we can target directly by location by scraping users who have recently posted while identifying the specific location you want to target."
  },
  {
    question: "Can you target by age?",
    answer: "No, we cannot target by age directly due to Instagram's privacy policies. While we cannot see other users' ages."
  },
  {
    question: "Can you filter/exclude certain countries / demographics?",
    answer: "Yes, we have dictionaries of names and words from various countries which allow us to filter out most names from Tier 2 and Tier 3 countries. By comparing text in profiles, bios, comments and posts to our extensive databases, we can with high accuracy exclude/filter profiles from specific territories. This geographic filtering capability helps ensure your marketing efforts reach culturally relevant audiences in your key regions for maximum engagement and ROI."
  },
  {
    question: "Are the followers real and when will I start seeing results?",
    answer: "Absolutely, the followers we gain for your account are real people, not bots. Our strict filtering helps guarantee interactions only with authentic users, which provides you with genuine followers interested in your type of content. You should begin to see initial high quality results, such as follower count increases, within the first few days after your service launch. We ARE NOT an SMM pannel: we DO NOT send fake/inactive/bots followers. Our approach focuses on connecting with profiles highly likely to actively engage with your content. This translates into measurable ROI through real followers primed to take important next steps like purchasing products or services.→ We are a growth/lead generation service delivering genuine results, that's why our services can seem costly."
  },
  {
    question: "Do I have to provide my Instagram Password?",
    answer: "Not for our password-less service (Reach, Reach AI, Engagement AI, Essential, Launch, Elevate). The only service for which we require your Instagram password is Prospectgram, our mass story voter tool. If maximum security is a top priority for you or you aren't comfortable sharing your password, we recommend our other services which do not require it. This way you can achieve growth with zero risk of an account ban"
  },
  {
    question: "How long does it take to set up a campaign?",
    answer: "It typically takes 3-5 business days to set up a campaign. However, during periods of high demand or for larger campaigns, setup may take up to 10 days. Please note, your first month starts from the first day of actions, ensuring you receive a full 30 days of service."
  },
  {
    question: "What actions will the accounts take to promote my account?",
    answer: "The specific promotional activities will depend on which service or package you select. Please refer to the “How It Works” section for the service you are interested in to understand how your account will be promoted.If your priority is achieving the highest levels of engagement and new followers discreetly, then our Reach AI service for Instagram is the best choice."
  },
  {
    question: "Are the followers/leads targeted?",
    answer: "Yes, of course, the followers will come from your own targeting choices/options."
  },
  {
    question: "How often should I update my target sources?",
    answer: "Update your target list every time you buy/renew a service, or ask us to change it if you aren't satisfied with the followers you're getting."
  },
  {
    question: "Why do you use themed accounts?",
    answer: "Our strategy of using themed accounts enables us to maintain a vast stockpile of thousands of accounts across popular niches. We are prepared to initiate our services within a week and have the capability to replace accounts on the same day if needed. This approach ensures zero downtime and allows us to maintain a high level of activity for all our clients right from the get-go. If you want custom accounts in this case go with the Reach AI service and the custom accounts option"
  },
  {
    question: "Can you create custom accounts?",
    answer: "Yes, for our Reach AI service we can create fully customized accounts. However, this requires a minimum commitment of 3 months of service or a single order of at least x3 package. Additionally, we retain ownership of the accounts after the service ends so they will continue generating engagement for your profile even after your term is over."
  },
  {
    question: "Can I see examples of the accounts?",
    answer: "Yes, examples can be provided. Please ask to check the sample accounts that could be ready for the given niche."
  },
  {
    question: "What do the Direct messages say? Can I adjust them or customize them?",
    answer: "The default direct messages aim to create a personalized, warm tone that encourages new followers to engage further with the main account. However, the direct message content is fully customizable to suit each client's preferred branding, voice and goal.We work closely with all customers to develop direct messages that align closely with their business and target audiences"
  },
  {
    question: "How do you get followers to my Account if you don't need my password?",
    answer: "We connect with your target audience through our network of relevant profiles. When followers of interest engage with our accounts, they receive a direct message inviting them to check out your main Instagram profile. This directs qualified potential followers to your page where many choose to follow and support your brand. By utilizing related accounts to introduce your content to new audiences, we are able to deliver high-quality new connections without collecting password information."
  },
  {
    question: "Will I lose followers if I stop using your services?",
    answer: "You can be assured that the followers gained through our services will remain engaged with your account even after discontinuing use of our services. By focusing on quality over quantity, we attract authentic connections from people truly interested in your niche who follow willingly based on enjoying your organic content. As a result, any followers added to your profile are committed supporters who choose to continue following independently of our management, so you will not experience losses upon stopping use of our growth tools."
  },
  {
    question: "Do all the followers match the target audience?",
    answer: "We cannot guarantee that 100% of followers will match the target audience exactly, as some factors are outside of our control. However, on average we achieve an accuracy rate of around 85-90% through our targeting and filtering techniques. While not perfect, this high level of relevance helps ensure the vast majority of new connections reached will be truly interested in your content and brand based on their demonstrated interests."
  },
  {
    question: "Will a targeted person receive interactions from multiple accounts?",
    answer: "No, each targeted person will only receive interactions from a single one of our accounts. The goal is not to spam. We also maintain a list of all people we have targeted in the past so we do not contact them again during future campaigns for your account. By limiting contact to one authentic interaction per new follower prospect, we avoid appearing spammy while discreetly introducing your profile to qualified new audiences over time in a manner that promotes natural following activity."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We provide easy and secured checkouts via Stripe."
  },
  {
    question: "I have a custom request, how do I proceed?",
    answer: "For urgent matters, please contact us on telegram here or via email."
  },
  {
    question: "What are the requirements for my account to use your services?",
    answer: "Your Instagram account must have a minimum of 12 posts and between 2-3 stories featured to qualify. Having properly filled out profiles with recent engaging content ensures new followers drawn to your page via our introductions will discover immediately appealing material upon connection. While we can help relatively new profiles as well, the best results are achieved when accounts demonstrate clear dedication to developing a presence and community through consistent curation. Please let us know if you need any recommendations for enhancing your profile prior to onboarding."
  },
  {
    question: "Do you offer refunds?",
    answer: "Refunds are not offered for the first service order due to the fact that we don't know your growth potential yet and because of high initial setup costs. For subsequent services, if we have already assessed your growth potential and guaranteed you a minimum follower increase, we will refund on a pro-rata basis if that goal is not met even after extending the campaign period. For example, if the guaranteed increase was not delivered by 12%, you would receive a 12% refund of the invoice. We reserve the right to request screenshots from your Instagram analytics dashboard. If the goal was not reached because your average daily unfollow rate slowed down progress, we may refuse a refund if the new follower increase alone still would have achieved the guarantee. For instance, If, on checking the data on your dashboard, it turns out that BEFORE we started the campaign, for example, you had an average unfollow rate of -10 per day, which is therefore unrelated to our actions, and you hadn't informed us of this, then we didn't have all the information we needed to establish a fair guarantee for everyone. So, supposing we had promised you +1,000 new followers, without you having given us the information beforehand, and that as a result you gained +700 followers instead of the promised 1,000 BUT that analysis of your dashboard showed a gain of +1,000 followers and -300 unfollows (because you didn't inform us before we made the guarantee that you were losing followers daily) over the period, i.e. a net result of +700 followers, no refund would be made since the target of 1,000 had technically been reached. Pre-campaign average unfollow rates most of the time sometimes due to inadequate content for your audience, account rebranding or the past use of fake/bots followers and are outside our control and we don't have to take responsibility or the blame for it. Rest assured that if we had all the information in our possession beforehand and, despite this, we did not achieve the objective after extending the service, you will be reimbursed as agreed above pro rata to the amount of the invoice."
  },
  {
    question: "Will you replace banned child accounts?",
    answer: "Yes, if any of our child accounts are suspended, we will automatically replace them at no extra cost and with no delay and your growth will not be disrupted."
  },
  {
    question: "Are the child accounts humanly piloted?",
    answer: "All actions are humanized to prevent our own accounts getting banned."
  }
]

export default function Team() {

  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index: any) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };


  return (
    <div className="bg-black py-24 sm:py-32 px-10">
      <h2 className="text-2xl font-bold tracking-tight text-gray-200 sm:text-4xl mx-auto text-center pb-10 bg-black p-8">
      Reassurance & Social Proof
      </h2>
      <div className="mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-4 px-6 lg:px-6 xl:px-6 border-2 border-gray-300 bg-gray-100 pb-8 mb-8">
        {proof.map((proof, index) => (
          <div key={index} className="flex flex-col items-center p-5">
            <h3 className="text-lg font-semibold mt-4 mb-4">{proof.name}</h3>
            <hr className="lg:w-52 xl:w-80 sm:w-40 md:w-40  h-1 bg-gray-500 mb-4"/>
            <p className="text-sm font-thin text-gray-600">{proof.role}</p>
          </div>
        ))}
      </div>

      {incentive.map((element, index) => {
        return(
          <div className="grid grid-cols-1 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1q max-w-md content-center bg-black mx-auto p-6 rounded-3xl shadow-xl shadow-blue-800 mb-10" key={index}>
            <h2 className="text-3xl text-white font-bold text-center mb-5">{element.heading}</h2>
            <p className="text-white text-center">{element.what}</p><br/>
          <Link href="/#" className="hover:text-blue-600 text-center text-white">{element.url}</Link>
          </div>
          )})}



      {/* FAQs */}
    <section className="mx-auto max-w-7xl bg-gray-100 px-2 py-10 md:px-0">
      <div>
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className=" font-bold leading-tight text-black sm:text-2xl lg:text-3xl text-center">
            Frequently Asked Questions
          </h2>
          {/* <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600 lg:mx-auto">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, assumenda
          </p> */}
        </div>
        <div className="gap-4 mt-8 mx-10 md:mt-16 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2">
          {faq.map((element, i) => (
            <div
              key={i}
              className={`cursor-pointer rounded-md border border-gray-400 transition-all duration-200 ${
                openIndex === i ? 'h-96 overflow-y-auto' : 'overflow-y-auto'}`}
            >
              <button
                type="button"
                className="flex w-full items-start justify-between px-4 py-5 sm:p-6 md:items-center"
                onClick={() => handleToggle(i)}
              >
                <span className="flex text-start text-lg font-semibold text-black">
                  {element.question}
                </span>
                {openIndex === i ? (
                  <ChevronUp className="h-5 w-5 text-gray-500 md:block" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500 md:block" />
                )}
              </button>
              {openIndex === i && (
                <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                  <p className="text-gray-500">
                  {element.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
        <p className="text-base mt-6 text-center text-gray-600">
          Can&apos;t find what you&apos;re looking for?{' '}
          <a href='#contactform' title="" className="font-semibold text-black hover:underline">
            Contact us
          </a>
        </p>
      </div>
    </section>
    </div>
  );
}
