import Image from 'next/image'
import React from 'react'


const data = [
    {
        address: "/Delivery.png",
        heading: "Next day as standard",
        paragraph: "Order before 3pm and get your order the next day as standard"

    },
    {
        address: "/checkmark.png",
        heading: "Made by true artisans",
        paragraph: "Handmade crafted goods made with real passion and craftmanship"

    },
    {
        address: "/Purchase.png",
        heading: "Unbeatable prices",
        paragraph: "For our materials and quality you won’t find better prices anywhere"

    },
      {
        address: "/Sprout.png",
        heading: "Recycled packaging",
        paragraph: "We use 100% recycled to ensure our footprint is more manageable"

     },
 ]
const AboutUs = () => {
  return (
    <main className='justify-self-center flex flex-col gap-[200px] py-[100px]'>
          <section className='flex flex-col lg:flex-row justify-center gap-8'>
              <div className='bg-[#007580] font-bold flex flex-col gap-72 py-16 px-16 text-white'>
                  <div className='flex flex-col gap-2'>
                      <h1 className='text-[32px]'>About Us - Comforty</h1>
                      <p className='lg:w-[495px]'>At Comforty, we believe that the right chair can transform your space and elevate your comfort. Specializing in ergonomic design, premium materials, and modern aesthetics, we craft chairs that seamlessly blend style with functionality. </p>
                  </div>
                  <button className='py-4 px-8 bg-[#218b94] self-start'>View collection</button>
              </div>
              <Image
                  alt='image'
                  width={619}
                  height={478}
                 src="/products/Image.png"></Image>
          </section>

          <section className=' flex flex-col items-center gap-6'>
              <h1 className='text-[32px] font-semibold text-center'>What makes our Brand Different</h1>
              <div className='flex flex-col lg:flex-row text-[#007580] gap-4'>
                  {data.map((data, index) =>
                   <div className='bg-[#F9F9F9] flex flex-col p-12 gap-[10px]' key={index}>
                  <Image
                      alt='delivery'
                      width={24}
                      height={24}
                      src={data.address}></Image>
                          <h1>{ data.heading}</h1>
                          <p className='w-[213.45px]'>{ data.paragraph}</p>
              </div>
                )}
           </div>
          </section>



          <section className='flex flex-col items-center gap-2'>
 <h1 className='text-[32px] font-semibold justify-self-start'>What makes our Brand Different</h1>          

          <div className='flex gap-6 justify-center text-[#2A254B]'>
              <div className='flex flex-col gap-2'>
                  <Image
                      alt='sofa'
                      width={630}
                      height={375}
                  src="/about/Large.png">
                      
                  </Image>
                  <p className='text-[20px]'>The Poplar suede sofa</p>
                  <p className='text-lg'>$99.00</p>
              </div>
                   <div className='flex flex-col gap-2'>
                  <Image
                      alt='sofa'
                      width={305}
                      height={375}
                  src="/about/Photo.png">
                      
                  </Image>
                  <p className='text-[20px]'>The Poplar suede sofa</p>
                  <p className='text-lg'>$99.00</p>
              </div>
                   <div className='flex flex-col gap-2'>
                  <Image
                      alt='sofa'
                      width={305}
                      height={375}
                  src="/about/Photo1.png">
                      
                  </Image>
                  <p className='text-[20px]'>The Poplar suede sofa</p>
                  <p className='text-lg'>$99.00</p>
                  </div>
                  
              </div>
              </section>
      </main>
      

  )
}

export default AboutUs