import React from 'react'
import { Poppins } from 'next/font/google'
import Image from 'next/image';

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
});


const SecondFooter = () => {
  return (
  <footer className='xl:px-[300px] py-6 flex justify-between items-center'>
          <p className={`${poppins.className} text-sm text-[#9A9CAA]`}>@ 2021 - Blogy - Designed & Develop by <span className='text-[#272343]'>Zakirsoft</span></p>
          <Image
              alt='visa'
              width={227}
              height={27}
              src="/social/payment.png"
              className='mix-blend-overlay'></Image>
      </footer>
  )
}

export default SecondFooter