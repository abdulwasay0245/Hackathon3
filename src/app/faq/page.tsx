import React from 'react'
import { InterFont } from '../component/fonts'

const faqdata = [
    { question: "What types of chairs do you offer?", },
    { question: "How can we get in touch with you?", },
    { question: "Do your chairs come with a warranty?", },
    { question: "What will be delivered? And When?", },
    { question: "Can I try a chair before purchasing?", },
    { question: "How do I clean and maintain my Comforty chair?", },
    
]


const Faq = () => {
  return (
      <main className='flex flex-col gap-6 justify-self-center mt-24 mb-40 items-center'>
          <h1 className='text-5xl font-bold text-[#333333]'>Questions Looks Here</h1>
          <p className='text-[#4F4F4F]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the </p>
          <div className='grid grid-cols-1 md:grid-cols-2 grid-rows-3 gap-4'>
              {faqdata.map((data, index) => 
             <article className={`${InterFont.className} bg-[#F7F7F7] p-4 rounded-lg flex flex-col`} key={index}>
                      <div className='flex justify-between text-lg font-bold'><p>{data.question}</p> <span className='text-2xl font-normal text-gray-500'>+</span></div>  
                      <p className={`${InterFont.className} md:w-[600px]`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
              </article>
            )}
          </div>
    </main>
  )
}

export default Faq