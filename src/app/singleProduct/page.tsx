import Image from 'next/image'
import React from 'react'
import ProductInfo from '../component/data/products'
const SingleProduct = () => {
  return (
      <main className='jusify-self-center flex flex-col items-center py-[100px] gap-24'>
          <section className='flex flex-col  lg:flex-row gap-20'>
              <Image
                  alt='main'
                  width={675}
                  height={607}
                  src="/products/Image-1.png"
              className='md:block hidden'>
                  
              </Image>
              <Image
                  alt='main'
                  width={350}
                  height={300}
                  src="/products/Image-1.png"
              className='block md:hidden'>
                  
              </Image>
              <article className='flex flex-col gap-12'>
                  <h1 className='text-6xl font-bold text-[#272343] lg:w-[520px]'>Library Stool Chair</h1>
                  <button className='rounded-full text-[20px] bg-[#029FAE] self-start p-1 font-semibold text-white'>$20.00 USD</button>
                  <hr className='w-full' />
                  <p className='lg:w-[534px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipiscing</p>
              <button className='py-[14px] px-[24px] rounded-lg text-center self-start items-center text-white bg-[#029FAE] flex gap-[10px]'> <Image alt='cart' width={24} height={24} src="/cart.png" className='invert'></Image> Add to Cart</button>
              </article>

          </section>


          <section className='flex flex-col gap-10 '>
              <div className='flex justify-between'>
                  <h1 className='text-[28px] font-bold'>Featured Products</h1>
                  <button className='border-b-4 font-bold text-lg'>View all</button>
              </div>
              <div className=' flex flex-col lg:flex-row gap-4'>
                  {ProductInfo.slice(0, 5).map((data, index) =>
                      <div className='flex flex-col gap-4' key={index}>
                            <Image 
                          alt="images"
                          width={263}
                          height={263}
                              src={data.bgImg}></Image>
                          <div className='flex justify-between items-center text-[#272343]'>
                              <h6>Library Stool Chair</h6>
                              <h6 className='font-bold text-sm'>$99</h6>
                          </div>
                    </div>
                    
                      
                      
                  )}
                  
              </div>
          </section>
          
   </main>
  )
}

export default SingleProduct