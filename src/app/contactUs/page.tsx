import React from 'react'
import { poppin, InterFont } from '../component/fonts'
import Image from 'next/image'

const data = [
    {
        address: "/trophy.png",
        heading: "High Quality",
        paragraph: "crafted from top materials",

    },
       {
        address: "/guarantee.png",
        heading: "Warranty Protection",
        paragraph: "Over 2 years",

    },
          {
        address: "/trophy.png",
        heading: "24 / 7 Support",
        paragraph: "Dedicated support",

    },
]

const ContactUs = () => {
  return (
      <main className='flex flex-col items-center justify-self-center'>
          
          <div className='py-[100px] lg:px-[200px] '>
              <div className={`${poppin.className} flex flex-col items-center gap-4 text-center`}> <h1 className='text-3xl lg:text-5xl font-bold text-[#333333]'>Get In Touch With Us</h1>
                  <p className='text-[#4F4F4F] lg:w-[644px]'>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate! </p>
              </div>

              <div className='py-[100px] px-[50px] flex flex-col lg:flex-row gap-24'>
                  <div className='flex flex-col gap-12'>
                      <div className='flex gap-4 items-start'>
                          <Image
                              alt='map'
                              width={30}
                              height={30}
                          src="/social/map.png">
                              
                          </Image>
                          <div className='flex flex-col gap-2'>
                              <h1 className={`${poppin.className} text-2xl font-medium`}>Address</h1>
                              <p className={`${InterFont.className} w-[212px]`}>236 5th SE Avenue, New York NY10000, United States</p>
                          </div>

                          

                          
                      </div>




                                            <div className='flex gap-4 items-start'>
                          <Image
                              alt='map'
                              width={30}
                              height={30}
                          src="/social/map.png">
                              
                          </Image>
                          <div className='flex flex-col gap-2'>
                              <h1 className={`${poppin.className} text-2xl font-medium`}>Phone</h1>
                              <p className={`${InterFont.className} w-[212px]`}>Mobile: +(84) 546-6789
Hotline: +(84) 456-6789</p>
                          </div>

                          

                          
                      </div>
                                            <div className='flex gap-4 items-start'>
                          <Image
                              alt='map'
                              width={30}
                              height={30}
                          src="/social/map.png">
                              
                          </Image>
                          <div className='flex flex-col gap-2'>
                              <h1 className={`${poppin.className} text-2xl font-medium`}>Working Time</h1>
                              <p className={`${InterFont.className} w-[212px]`}>Monday-Friday: 9:00 - 22:00
Saturday-Sunday: 9:00 - 21:00</p>
                          </div>

                          

                          
                      </div>
                  </div>
              <form className='flex flex-col lg:w-[535px]'>
  <div className="mb-4 flex flex-col gap-5">
    <label className="block text-sm font-medium text-gray-700">Your name</label>
    <input type="text" name="name" className="mt-1 block px-3 py-2 bg-white border border-gray-300 h-[72px] rounded-[10px] shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Your name"/>
  </div>

  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700">Email address</label>
    <input type="email" name="email" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 h-[72px] rounded-[10px] shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Your email address"/>
  </div>

  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700">Subject</label>
    <input type="text" name="subject" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 h-[72px] rounded-[10px] shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="This is an optional"/>
  </div>

  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700">Message</label>
    <textarea name="message"  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 h-[120px] rounded-[10px] shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Hi! I'd like to ask about"></textarea>
  </div>

  <div className="mt-4">
    <button type="submit" className="inline-flex items-center px-[70px] py-2 bg-[#029FAE] border border-[#B88E2F]  rounded-[5px] text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-auto sm:text-sm">
      Submit
    </button>
  </div>
</form>
              </div>


          </div>
          
          <section className='flex items-center justify-center lg:px-[300px]'>
              <div className='flex flex-col lg:flex-row items-center justify-between bg-[#F4F4F4] w-auto lg:w-[1320px] py-[100px] px-[50px]'>
                  {data.map((data, index) =>
                 <div className='flex gap-[10px] items-center' key={index}>
                      <Image
                          alt='trophy'
                          width={60}
                          height={60}
                          src={data.address}></Image>
                      <div className={`flex flex-col gap-[2px]${poppin.className}`}>
                              <h1 className={` text-[25px] font-semibold text-[#242424]`}>{ data.heading}</h1>
                              <p className='text-[#898989] text-[20px]'>{ data.paragraph}</p>
                      </div>
                  </div>
                )}
              </div>
              
          </section>

   </main>
  )
}

export default ContactUs