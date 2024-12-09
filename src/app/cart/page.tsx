import Image from 'next/image'
import React from 'react'


const Cart = () => {
  return (
      <main className='justify-self-center'>
          <section className='flex justify-center py-[100px]'>
              <div className='flex items-center flex-col lg:flex-row gap-20'>
                  <article className='flex flex-col gap-3'>
                      <h1 className='text-[22px] font-medium'>Bag</h1>
                      <div className='flex lg:gap-96 border-b py-8'>
                      <div className='flex gap-6'>
                          <Image alt='main'
                              width={150}
                              height={150}
                          src="/products/Image-2.png">
                              
                          </Image>
                          <div className='flex flex-col gap-6'>
                              <h1>Library Stool Chair</h1>
                              <div className='flex flex-col text-[15px] text-[#757575]'>
                                  Ashen Slate/Cobalt Bliss
                                  <span className='flex justify-between'><p>Size L</p> <p>Quantity 1</p></span></div>
                              <div className='flex gap-2'>
                                  <Image alt='heart' width={24} height={24} src="/heart.png"></Image>
                                  <Image alt='dustbin' width={24} height={24} src="/dustbin.png"></Image>
                                  </div>
                              </div>
                          </div>
                              <p className='text-[15px]'>MRP: $99</p>
                          
                      </div>

                       <div className='flex lg:gap-96 border-b py-8'>
                      <div className='flex gap-6'>
                          <Image alt='main'
                              width={150}
                              height={150}
                          src="/products/Image-2.png">
                              
                          </Image>
                          <div className='flex flex-col gap-6'>
                              <h1>Library Stool Chair</h1>
                              <div className='flex flex-col text-[15px] text-[#757575]'>
                                  Ashen Slate/Cobalt Bliss
                                  <span className='flex justify-between'><p>Size L</p> <p>Quantity 1</p></span></div>
                              <div className='flex gap-2'>
                                  <Image alt='heart' width={24} height={24} src="/heart.png"></Image>
                                  <Image alt='dustbin' width={24} height={24} src="/dustbin.png"></Image>
                                  </div>
                              </div>
                          </div>
                              <p className='text-[15px]'>MRP: $99</p>
                          
                      </div>

                      
                  </article>

                  <div className='flex flex-col self-center lg:self-start gap-6 text-[15px]  text-[#111111]'>
                      <h1 className='text-[22px] font-medium'>Summary</h1>
                      <div className='flex justify-between'>Subtotal <span>$198.00</span></div>
                      <div className='flex justify-between'>Estimated Delivery & Handling <span>Free</span></div>
                      <hr />
                      <div className='flex justify-between'>Total <span>$198.00</span></div>
                      <hr />
                       <button className='py-[14px] px-[100px] rounded-full text-center self-start items-center text-white bg-[#029FAE] flex gap-[10px]'>Member Checkout</button>
                  </div>
              </div>
              
          </section>
    </main>
  )
}

export default Cart