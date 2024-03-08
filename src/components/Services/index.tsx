import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Services = () => {
  return (
    <>
    <div className=' pb-10'>
    <h1 className='font-bold text-2xl text-center pt-10 text-gray-200'>All Social Media Marketing Services</h1>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 mr-10 ml-10 content-stretch'>
        <div className='border-2 border-gray-200 flex flex-col justify-center items-center py-10 mt-10 max-w-xs bg-gray-100'>
            <Image alt='X(formerly twitter)'
            src={'/twitter.png'}
            width={50}
            height={50}/>
            <h2 className='font-bold text-lg'>X(formerly twitter)-NFT Services</h2>
            <ul>
                <Link href='/#' className='underline decoration-slate-400 font-thin
                '>X NFT Auto Engagement Packages</Link><br/>
                <Link href='/#' className='underline decoration-slate-400 font-thin'>X NFT Followers</Link><br/>
                <Link href='/#' className='underline decoration-slate-400 font-thin'>X NFT Likes</Link><br/>
                <Link href='/#' className='underline decoration-slate-400 font-thin'>X NFT Reposts(formerly Retweets)</Link><br/>
                <Link href='/#' className='underline decoration-slate-400 font-thin'>X NFT Comments</Link><br/>
            </ul>
        </div>
        <div className='border-gray-200 border-2 flex flex-col justify-center items-center py-10 mt-10 max-w-xs bg-gray-100'>
                <Image alt='discord-logo' src={'/discord.png'} width={50} height={50}/>
                <h2 className='font-bold text-lg'>Discord NFT Services</h2>
            <ul className=''>
                <Link href='/#' className='underline decoration-slate-400 font-thin'>Discord NFT Members</Link><br/>
                <Link href='/#' className='underline decoration-slate-400 font-thin'>Discord NFT Reactions</Link><br/>
                <h2 className='font-bold text-lg mt-5 mb-[-25px]'>Discord Services</h2><br/>
                <Link href='/#' className='underline decoration-slate-400 font-thin'>Discord Members</Link><br/>
            </ul>
            </div>
        <div className='  flex flex-col justify-center items-center py-10 mt-10 max-w-xs bg-gray-100'>
        <Image alt='X-US Services'
            src={'/circle.png'}
            width={50}
            height={50}/>
            <h2 className='font-bold text-lg'>X(formerly twitter)-Services</h2>
            <ul>
                <Link href='/#' className='underline decoration-white font-thin'>X Followers</Link><br/>
                <Link href='/#' className='underline decoration-slate-400 font-thin'>X USA Followers</Link><br/>
                <Link href='/#' className='underline decoration-slate-400 font-thin'>X Likes</Link><br/>
                <Link href='/#' className='underline decoration-slate-400 font-thin'>X Reposts(formerly Retweets)</Link><br/>
                <Link href='/#' className='underline decoration-slate-400 font-thin'>X Views</Link><br/>
                <Link href='/#' className='underline decoration-slate-400 font-thin'>X Impressions</Link><br/>
                <Link href='/#' className='underline decoration-slate-400 font-thin'>X Poll Votes</Link><br/>
            </ul>
        </div>
            </div>
    </div>
    </>
  )
}

export default Services