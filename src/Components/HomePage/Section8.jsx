import React from 'react'
import deliveryImg from '../../assets/Images/delivery.png'
import appImg from '../../assets/Images/app.png'


const Section8 = () => {
  return (
      <div className='md:h-[65vh] p-10 bg-red-800 bg-right-bottom bg-contain bg-no-repeat transform transition-all duration-700 ease-out'
         style={{ backgroundImage: `url(${appImg})` }}
      >
         <div className='flex flex-col md:flex-row gap-10 my-0 mx-auto text-gray-100'>
            <div className='object-cover'>
               <img src={deliveryImg} alt="" className='w-auto h-[300px]'/>
            </div>
            <div className='space-y-3'>
               <p className='font-serif italic md:text-2xl lg:text-3xl'>We Guaranttee</p>
               <p className='font-bold md:text-4xl lg:text-5xl'>30 Minute Delivery</p>
               <p className='text-sm'>If you’re having a meeting, working late at night and need an extra push.</p>
               <p>Let us know and we will be there</p>

               <button className="relative cursor-pointer group overflow-hidden py-3 px-9 font-medium rounded-sm w-fit mt-4 text-black bg-amber-300">
							{/* Animated BG from center outwards */}
							<span className="absolute inset-y-0 left-1/2 w-0 bg-white group-hover:w-full transform -translate-x-1/2 transition-all duration-200 ease-in-out"></span>
							
							{/* Text stays above */}
							<span className="relative z-10"><a href="/">ORDER NOW</a></span>
					</button>
            </div>
         </div>
      </div>
  )
}

export default Section8