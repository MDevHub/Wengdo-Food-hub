   import React from 'react'
   import pizza from '../../assets/Images/pizza.jpg'

   const Section3 = () => {
   return (
      <div
         className="md:h-[90vh] bg-cover bg-center transition-all duration-300"
         style={{ backgroundImage: `url(${pizza})` }}
      >
        <div className='relative py-20 px-1 md:py-0 md:px-0 '> 
            <div className=' border space-y-3 border-white text-white top-0  md:absolute md:left-[40%] lg:left-[50%] md:top-40 font-serif  p-10 bg-[#000000] backdrop-blur-3xl'>
               <p className=' font-semibold text-xl'>Exclusive offer</p>
               <h1 className='text-3xl sm:text-4xl  md:text-5xl  font-bold font-sans mt-1'>Veggi Fun Pizza</h1>
               <div className='flex space-y-3 mt-5 items-center gap-3'>
                  <p className='flex flex-col text-6xl font-bold font-serif '>$12 <span  className='text-xl font-semibold'>Each</span></p>
                  <div className='text-sm sm:text-xl text-yellow-400'>
                     <p>- Chicken Hallon</p>
                     <p>- Summer Pizza</p>
                     <p>- Vegge Lover</p>
                  </div>
               </div>
               <button className='bg-red-800 hover:bg-red-600 py-3 px-8 rounded-sm cursor-pointer'>
                  <a href="/">
                     ORDER NOW
                  </a>
               </button>
            </div>
        </div>
      </div>
   )
}

export default Section3
