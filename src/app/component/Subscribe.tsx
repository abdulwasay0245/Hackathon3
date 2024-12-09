import React from 'react'
import { roboto, openSans } from './fonts'
import ProductInfo from './data/products'
import Image from 'next/image'



const Subscribe = () => {
      return (
      <section className={`${roboto.className} bg-[#1E28320D] py-[100px] lg:px-[300px] gap-[70px] flex flex-col items-center`}>
          <h2 className='font-medium text-2xl lg:text-[50px] text-center'>Or subscribe to the newsletter</h2>
          <div className='flex gap-4'>
              <input type="text" placeholder='Email address...' className='border-b bg-transparent font-semibold lg:w-[643px]' />
            <button className={`${openSans.className} text-center border-b text-[#1E2832]`}>SUBMIT</button>
          </div>

          <h2 className='font-medium text-2xl lg:text-[50px] text-center'>Follow products and discounts on Instagram</h2>

          <div className='flex flex-col  lg:flex-row gap-6'>
              <Image
                  alt='dsa'
                  width={200}
                  height={200}
                  src="/products/Image-4.png"
                  ></Image>

                     <Image
                  alt='dsa'
                  width={200}
                  height={200}
                  src="/products/Image-8.png"
                  ></Image>
                     <Image
                  alt='dsa'
                  width={200}
                  height={200}
                  src="/products/Image-1.png"
                  ></Image>
                     <Image
                  alt='dsa'
                  width={200}
                  height={200}
                  src="/products/Image.png"
                  ></Image>
                     <Image
                  alt='dsa'
                  width={200}
                  height={200}
                  src="/products/Image-2.png"
                  ></Image>
                     <Image
                  alt='dsa'
                  width={200}
                  height={200}
                  src="/products/Image-11.png"
                  ></Image>
                  
          </div>
   </section>
  )
}

export default Subscribe