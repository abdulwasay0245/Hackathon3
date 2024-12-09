import React from 'react'
import { Roboto } from 'next/font/google'
import Image from 'next/image';

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
});

const ExploreSection = () => {
  return (
      <section className='flex flex-col justify-self-center items-center lg:-rotate-90 '>
              
                
                  <h1 className={`${roboto.className} text-[34px]  `}>Explore new and popular styles</h1>
          <div className='flex items-center '>
          <Image
              alt='mainimg'
              width={648}
              height={648}
                  src="/products/Image-2.png"
              className='lg:rotate-90'></Image>
         </div>
              <div className='grid grid-cols-2 grid-rows-2 lg:gap-4 lg:rotate-90'>
                  <Image
                      alt='1'
                      width={312}
                      height={312}
                      src="/products/Image-3.png"></Image>
                    <Image
                      alt='1'
                      width={312}
                      height={312}
                      src="/products/Image.png"></Image>
                    <Image
                      alt='1'
                      width={312}
                      height={312}
                      src="/products/Image-5.png"></Image>
                    <Image
                      alt='1'
                      width={312}
                      height={312}
                      src="/products/Image.png"></Image>
              </div>
</section>
  )
}

export default ExploreSection