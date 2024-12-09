import Image from 'next/image'
import React from 'react'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
});

const socialLinks = [
  {
    address: "/social/facebook.png"
  },
    {
    address: "/social/twitter.png"
  },
      {
    address: "/social/instagram.png"
  },
        {
    address: "/social/pinterest.png"
  },
          {
    address: "/social/youtube.png"
  },
]

const Footer = () => {
  return (
    
      <footer className='flex flex-col gap-24 lg:flex-row item-center justify-between justify-self-center border-y-2   2xl:px-[300px] py-16 '>
          <nav className='flex flex-col gap-6 items-center lg:items-start'>
               <div className='flex gap-2'>
                  <Image
                      alt='logo'
                      width={40}
                      height={40}
                      src="/logoIcon.png"></Image>
                   <h1 className='text-center text-[#272343] text-[26px] font-medium'>Comforty</h1>
        </div>
        <p className='lg:w-[350px]'>Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum.
          Cras egestas purus </p>
        <div className='flex gap-1 items-center'>
          {socialLinks.map((link, index) => 
            <Image
              key={index}
              alt='social'
              width={38}
              height={38}
              src={link.address}></Image>
          )}
        </div>
      </nav>
      

      <nav className='flex flex-col items-center lg:items-start gap-5'>
        <h2 className='text-[14px] font-medium text-[#9A9CAA]'>Category</h2>
        <ul className='flex flex-col gap-2 text-[#272343]'>
          <li className= "hover:text-[#007580]">Sofa</li>
          <li className= "hover:text-[#007580]">Arm Chair</li>
          <li className= "hover:text-[#007580]">Wing Chair</li>
          <li className= "hover:text-[#007580]">Desk Chair</li>
          <li className= "hover:text-[#007580]">Wooden Chair</li>
          <li className= "hover:text-[#007580]">Park Bench</li>
        </ul>

      </nav>


       <nav className='flex flex-col items-center lg:items-startgap-5'>
        <h2 className='text-[14px] font-medium text-[#9A9CAA]'>Support</h2>
        <ul className='flex flex-col gap-2 text-[#272343]'>
          <li className= "hover:text-[#007580]">Help & Support</li>
          <li className= "hover:text-[#007580]">Terms & Conditions</li>
          <li className= "hover:text-[#007580]">Privacy Policy</li>
          <li className= "hover:text-[#007580]">Help</li>
          
        </ul>

      </nav>

      <div className='flex flex-col gap-3 items-center  lg:items-start'>
        <h2>NEWSLETTER</h2>
        <div className='flex flex-col xl:flex-row  gap-1 lg:items-center'>
          <input type="text" placeholder='Your email' className='border border-[#E1E3E5] h-[46px] p-4 text-[#9A9CAA] rounded-lg'/>
          <button className='py-[14px] px-6 bg-[#029FAE] rounded-lg text-center text-white'>Subscribe</button>
        </div>
          <p className='text-[#272343] lg:w-[424px] text-[15px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.</p>
      </div>
          
    </footer>


  
    
    
  )
}

export default Footer
