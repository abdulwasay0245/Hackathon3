import React from 'react'
import logos from './data/logos'
import Image from 'next/image'

const Logosection = () => {
  return (
      <section className=' flex lg:flex-row flex-col gap-10 p-4 justify-self-center items-center'>
          {logos.map((logos, index) =>
              <Image
                  key={index}
                  alt={logos.alt}
                  src={logos.address}
                  width={logos.width}
                  height={logos.height}></Image>
        )}
   </section>
  )
}

export default Logosection