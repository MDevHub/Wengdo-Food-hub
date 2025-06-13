import React from 'react'
import ServiceImg from '../../assets/Images/service-5.jpg'
import ServiceImg1 from '../../assets/Images/service-6.jpg'
import ServiceImg2 from '../../assets/Images/service-7.jpg'

const Section3 = () => {
  return (
      <div className='bg-gray-100 py-10 sm:py-20 text-center space-y-5 transition-all duration-700'>
         <h1 className='font-bold text-2xl md:text-4xl'>Our Services</h1>
         <p className='text-md text-gray-700'>Override the digital divide with additional clickthroughs from immersion <br />along the information highway.</p>
         
         <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 m-auto px-4 md:px-20  xl:px-50'> 
            <div className='text-left bg-white rounded-sm'>
              <div className="relative cursor-pointer group overflow-hidden">
                  <img 
                     src={ServiceImg} 
                     alt="ServiceImg" 
                     className="w-full transform transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-500 transition-opacity duration-500 pointer-events-none z-10"></div>
               </div>
               <div className='py-6 px-3 space-y-3'>
                  <p className='font-bold text-xl cursor-pointer hover:text-red-900'>Take care of Quality</p>
                  <p className='text-sm text-gray-800'>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs.</p>
               </div>
            </div>

            <div className='text-left bg-white rounded-sm'>
              <div className="relative cursor-pointer group overflow-hidden">
                  <img 
                     src={ServiceImg1} 
                     alt="ServiceImg" 
                     className="w-full transform transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-500 transition-opacity duration-500 pointer-events-none z-10"></div>
               </div>
               <div className='py-6 px-3 space-y-3'>
                  <p className='font-bold text-xl cursor-pointer hover:text-red-900'>Taste dream food</p>
                  <p className='text-sm text-gray-800'>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs.</p>
               </div>
            </div>

             <div className='text-left bg-white rounded-sm'>
              <div className="relative cursor-pointer group overflow-hidden">
                  <img 
                     src={ServiceImg2} 
                     alt="ServiceImg" 
                     className="w-full transform transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-500 transition-opacity duration-500 pointer-events-none z-10"></div>
               </div>
               <div className='py-6 px-3 space-y-3'>
                  <p className='font-bold text-xl cursor-pointer hover:text-red-900'>On time delivery</p>
                  <p className='text-sm text-gray-800'>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs.</p>
               </div>
            </div>
         </div>
      </div>
  )
}

export default Section3