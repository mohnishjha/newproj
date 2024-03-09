import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const errorr = () => {
  return (
    <div className='text-white text-center m-40 flex flex-col items-center'>
            <p>Either something is broken or you have lurked in the wrong direction</p>
            <h1 className='font-bold text-4xl my-10'>Error <span className='text-8xl'>404</span></h1>
            <h2 className='mb-20'>Page not found</h2>
            <Link href={'/#'}>
            <Image alt='logo' src={'/banner.png'} width={200} height={200}/>
            </Link>
        </div>
  )
}

export default errorr