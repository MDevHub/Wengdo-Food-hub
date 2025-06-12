import React from 'react'
import aboutImg1 from '../../assets/Images/about-1.jpg'
import aboutImg2 from '../../assets/Images/3.jpg'


const Section2 = () => {
  return (
      <div className='flex flex-col md:flex-row gap-10 justify-between py-30 px-3 sm:px-5 md:px-7 lg:px-10 xl:px-28  transition-all duration-700'>
         <div className='md:max-w-140 lg:max-w-150 space-y-4'>
            <p className='text-4xl font-bold text-gray-900'>Some Words About Us <br /> & Our Fast Food</p>
            <p className='text-[15px] text-gray-800'>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>
            <p className='text-[15px] text-gray-800'>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring. strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution</p>
         </div>
         <div className='relative flex'>
            <img src={aboutImg1} alt="" className='relative'/>
            <img src={aboutImg2} alt="" className='absolute '/>
         </div>
      </div>
  )
}

export default Section2