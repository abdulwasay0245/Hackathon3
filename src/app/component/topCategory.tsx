import React from 'react'
import Category from './data/topCategory'

const TopCategory = () => {
    return (
        <div className='flex flex-col justify-self-center mt-[136px] gap-5'>
            <h1 className='text-[32px] font-semibold'>Top categories</h1>
      <div className='  flex lg:flex-row flex-col gap-4'>
          {Category.map((category, index) =>
              <div className='flex items-end rounded-[10px] lg:w-[424px] lg:h-[424px] bg-cover bg-no-repeat ' key={index}
              style={{backgroundImage: `url(${category.address})`}}>
                  <div className='bg-black flex flex-col opacity-70 text-white p-5 gap-2 rounded-b-lg w-full'>
                 <h1 className='text-[20px]'>{ category.heading}</h1>
                  <p className='text-[14px]'>{ category.paragraph}</p>
               </div>
              </div>
    )}
            </div>
            </div>
  )
}

export default TopCategory