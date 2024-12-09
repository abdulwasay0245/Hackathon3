import Image from 'next/image'
import React from 'react'
import logos from './data/logos'

const Hero = () => {
  return (
      <main className='bg-[#F0F2F3] rounded-b-[48px] items-center flex flex-col lg:flex-row  justify-center py-36 px-[70px] max-w-[1500px] justify-self-center'>
          <article className='flex flex-col gap-6 '>
              <div className='flex flex-col gap-4 text-[#272343]'>
                      <p className='text-[14px] '>Welcome to chairy</p>
              <h1 className='text-4xl lg:text-[60px] font-bold  lg:w-[557px]'>Best Furniture
Collection for your
interior.</h1>
              </div>
              <button className='py-[14px] px-[24px] bg-[#029FAE] flex gap-2 items-center w-[170px] text-white rounded-lg'>Show Now <span className='text-[24px]'> &#8594;</span></button>
          </article>
              <Image
                  alt='chair'
                  src="/chair.png"
                  width={434}
              height={584}
          className='hidden lg:block'>
              
                  </Image>
    </main>
  )
}

export default Hero