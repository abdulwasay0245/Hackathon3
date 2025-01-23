import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
      <header>
          <div className='bg-[#272343] text-white flex flex-col sm:flex-row gap-5 items-center justify-between py-[14px] px-24 md:px-32 lg:px-52 2xl:px-[300px]'>
              <div className='flex gap-2  items-center  '>
                  <Image
                      alt='tick'
                      width={16}
                      height={16}
                      src="/tick.png"
                    className='opacity-70 hover:opacity-100'></Image>
                  <p className='text-[13px] opacity-70 hover:opacity-100 w-[240px]'>Free shipping on all orders over $50</p>
              </div>
              <div className='flex gap-6 items-center text-[13px] font-normal'>
                  <div className='flex gap-[6px] items-center'>
                      <p className='opacity-70 hover:opacity-100'>Eng</p>
                      <Image
                          alt='arrowDown'
                          width={7}
                          height={3.5}
                          src="/arrowDown.png"
                          className='opacity-70 hover:opacity-100'>
                          
                      </Image>
                  </div>
                  <Link href="./faq"><p className='opacity-70 hover:opacity-100'>Faq</p></Link>
                  <div className='flex gap-[6px] items-center'>
                      <Image
                          alt='exlaim'
                          width={16}
                          height={16}
                          src="/exclaim.png"
                          className='opacity-70 hover:opacity-100'>
                          
                      </Image>
                      <p className='opacity-70 hover:opacity-100'>Need Help</p>
                  </div>
              </div>
          </div>


          {/* 2nd section of header  */}


          <div className='bg-[#F0F2F3] flex justify-between items-center py-5 px-10 xsm:px-16 sm:px-24 md:px-32 lg:px-52 2xl:px-[300px]'>
              <div className='flex gap-2'>
                  <Image
                      alt='logo'
                      width={70}
                      height={70}
                      src="/eventhorizon.png"></Image>
           
              </div>
             
             <Link href="./cart">
              <div className='bg-white px-4 py-[11px] rounded-lg flex items-center text-center gap-2'>
                  <Image
                      alt='cart'
                      width={22}
                      height={22}
                      src="/cart.png"></Image>
                  <p>Cart</p>
                  <div className='rounded-full bg-[#007580] text-[10px] font-medium h-5 w-5 text-white content-center'>
                      <p className= {`'text-center' `}>2</p>
                  </div>
                  </div>
                  </Link>

          </div>







          {/* navigation bar  */}



          <nav className='flex flex-col items-center gap-12 md:flex-row md:justify-between py-[14px] px-24 md:px-32 lg:px-52 2xl:px-[300px] border-b'>
              <ul className='flex gap-8 text-[14px] font-medium text-[#007580]'>
                 <Link href="/"> <li>Home</li></Link>
                 <Link href="home"> <li>Shop</li></Link>
                 <Link href="./productPage"> <li>Product</li></Link>
                 <Link href="home"> <li>Pages</li></Link>
                 <Link href="./aboutUs"> <li>About</li></Link> 
              </ul>
              <div className='flex gap-2 text-[14px]'>
               <Link href="./contactUs">   <h6 className='text-[#636270]'>Contact:</h6></Link>
                  <p className='font-medium'>(808) 555-0111</p>
              </div>
          </nav>
</header>
  )
}

export default Header