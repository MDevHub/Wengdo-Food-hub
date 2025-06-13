import React from 'react'
import chef1 from '../../assets/Images/chef-1.jpg'
import chef2 from '../../assets/Images/chef-2.jpg'
import chef3 from '../../assets/Images/chef-3.jpg'
import chef4 from '../../assets/Images/chef-4.jpg'


const Section5 = () => {
  return (
      <div className='py-10 md:py-20 text-center container px-4 mx-auto transition-all duration-1000'>
         <p className='font-bold text-3xl'>Our Chef</p>
         <p className='text-gray-800'>Override the digital divide with additional clickthroughs from immersion <br />along the information highway.</p>
         <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-10 gap-4 w-full'>
            
            <div className=''>                 
               <div className='relative w-54 h-54 rounded-full mx-auto group overflow-hidden mb-4 cursor-pointer'>
                  {/* Dark overlay on hover */}
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10 rounded-full"></div>

                  {/* Chef image */}
                  <img
                     src={chef1}
                     alt="Chef1"
                     className='rounded-full w-full h-full object-cover group-hover:scale-110 transition-all duration-1000'
                  />
               </div>
               <p className='font-bold text-gray-800'>John michale</p>
               <p>Burger Specialist</p>
            </div>


             <div className=''>                 
               <div className='relative w-54 h-54 rounded-full mx-auto group overflow-hidden mb-4 cursor-pointer'>
                  {/* Dark overlay on hover */}
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10 rounded-full"></div>

                  {/* Chef image */}
                  <img
                     src={chef2}
                     alt="Chef2"
                     className='rounded-full w-full h-full object-cover group-hover:scale-110 transition-all duration-1000'
                  />
               </div>
               <p className='font-bold text-gray-800'>Micheal Mike</p>
               <p>Burger Specialist</p>
            </div>
            
            <div className=''>                 
               <div className='relative w-54 h-54 rounded-full mx-auto group overflow-hidden mb-4 cursor-pointer'>
                  {/* Dark overlay on hover */}
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10 rounded-full"></div>

                  {/* Chef image */}
                  <img
                     src={chef3}
                     alt="Chef3"
                     className='rounded-full w-full h-full object-cover group-hover:scale-110 transition-all duration-1000'
                  />
               </div>
               <p className='font-bold text-gray-800'>John michale</p>
               <p>Burger Specialist</p>
            </div>

             <div className=''>                 
               <div className='relative w-54 h-54 rounded-full mx-auto group overflow-hidden mb-4 cursor-pointer'>
                  {/* Dark overlay on hover */}
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10 rounded-full"></div>

                  {/* Chef image */}
                  <img
                     src={chef4}
                     alt="Chef4"
                     className='rounded-full w-full h-full object-cover group-hover:scale-110 transition-all duration-1000'
                  />
               </div>
               <p className='font-bold text-gray-800'>John michale</p>
               <p>Burger Specialist</p>
            </div>
         </div>   
      </div>
  )
}

export default Section5



