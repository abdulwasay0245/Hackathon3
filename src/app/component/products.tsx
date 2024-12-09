import Image from 'next/image'
import React from 'react'
import ProductInfo from './data/products'

const Products = () => {
  return (
      <div className='grid grid-cols-1 lg:grid-cols-4 gap-x-5'>
          {ProductInfo.slice(0,4).map((info, index) =>
                 <div className='justify-self-center' key={index}>
          <div className=' w-[312px] h-[312px] bg-cover pt-5 pl-5'
          style={{backgroundImage: `url(${info.bgImg})`}}>
                      <div className={` py-[6px] px-[10px] rounded-[4px] w-[49px]  `}
                          style={{ backgroundColor: info.bgcolor }}>
                          <p className='text-center text-[13px] font-medium text-white'>{info.text}</p></div>
          </div>
                  <div className='flex items-center justify-between'>
                      <div className='flex flex-col gap-[10px]'>
                          <p className='text-base text-[#007580]'>Library Stool Chair</p>
                          <p className='text-lg'>$20 <span className='text-[14px] line-through text-[#9A9CAA]'>{info.strike}</span> </p>
                      </div>
                      <div className=' py-[10px] px-[10px] rounded-lg'
                      style={{backgroundColor: info.shouldInvert ? '#F0F2F3' : '#029FAE '}}>
                          <Image
                              alt='cart'
                              width={24}
                              height={24}
                              src='/cart.png'
                           
                              style={{
                                  filter: info.shouldInvert ? 'none' : 'invert(1)',
                                  
                               }}></Image>
                      </div>
                      </div>
    </div>
        )}
   </div>
  )
}

export default Products