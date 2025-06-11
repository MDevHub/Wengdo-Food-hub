import React from 'react'
import product1 from '../../assets/Images/product1.jpg'
import product2 from '../../assets/Images/product2.jpg'
import product3 from '../../assets/Images/product3.jpg'
import product4 from '../../assets/Images/product4.jpg'

const Section6 = () => {
   return (
      <div className='py-15 md:py-20 px-5 bg-amber-100'>
         <div className='grid grid-cols-1 md:grid-cols-2 w-full gap-5'>

         <div className="bg-cover bg-center px-5 md:px-10 py-10 md:y-15 space-y-1 md:space-y-3 relative overflow-hidden rounded-xs"
            style={{ backgroundImage: `url(${product1})` }}
         >
            <div className="absolute top-2 -right-12 rotate-45 bg-red-600 text-white text-xs font-bold px-12 py-1 shadow-lg">HOT</div>
            <p className=' text-3xl md:text-4xl text-white font-extrabold '>Non Veg Chees <br />Burger</p>
            <p className='text-white hidden md:block font-semibold max-w-80'>Completely synergize resource taxing relation ships via premier niche markets. Professionally cultivate one-to-one customer service.</p>
            <p className='text-3xl  md:text-5xl font-extrabold text-white'>$9.99</p>
            <button className="relative cursor-pointer group overflow-hidden py-2 px-6 font-medium rounded-sm w-fit mt-4 text-black bg-amber-300">
               <span className="absolute inset-y-0 left-1/2 w-0 bg-white group-hover:w-full transform -translate-x-1/2 transition-all duration-300 ease-in-out"></span>
               <span className="relative z-10"><a href="/">ORDER NOW</a></span>
            </button>
         </div>

         <div className="bg-cover bg-center z-10  px-5  md:px-10 py-10 md:y-15 space-y-1 md:space-y-4 relative overflow-hidden rounded-xs"
            style={{ backgroundImage: `url(${product2})` }}
         >
            <div className="absolute top-2 -right-12 rotate-45 bg-red-600 text-white text-xs font-bold px-12 py-1 shadow-lg">NEW</div>
            <p className=' text-3xl md:text-4xl text-white font-extrabold '>Guardian Spicy <br />Burger</p>
            <p className='text-white hidden md:block font-semibold max-w-80'>Completely synergize resource taxing relation ships via premier niche markets. Professionally cultivate one-to-one customer service.</p>
            <p className='text-3xl  md:text-5xl font-extrabold text-white'>$3.99</p>
            <button className="relative cursor-pointer group overflow-hidden py-2 px-6 font-medium rounded-sm w-fit mt-4 text-black bg-amber-300">
               <span className="absolute inset-y-0 left-1/2 w-0 bg-white group-hover:w-full transform -translate-x-1/2 transition-all duration-300 ease-in-out"></span>
               <span className="relative z-10"><a href="/">ORDER NOW</a></span>
            </button>
         </div>

         <div className="bg-cover bg-center z-10  px-3  md:px-10 py-7 md:y-15 space-y-1 md:space-y-4 relative overflow-hidden rounded-xs"
            style={{ backgroundImage: `url(${product3})` }}
         >
            <div className="absolute top-2 -right-12 rotate-45 bg-red-600 text-white text-xs font-bold px-12 py-1 shadow-lg">HOT</div>
            <p className=' text-3xl md:text-4xl text-white font-extrabold '>Magranta Cheese <br />Pizza</p>
            <p className='text-white hidden md:block font-semibold max-w-80'>Completely synergize resource taxing relation ships via premier niche markets. Professionally cultivate one-to-one customer service.</p>
            <p className='text-3xl  md:text-5xl font-extrabold text-white'>$4.99</p>
            <button className="relative cursor-pointer group overflow-hidden py-2 px-6 font-medium rounded-sm w-fit mt-4 text-black bg-amber-300">
               <span className="absolute inset-y-0 left-1/2 w-0 bg-white group-hover:w-full transform -translate-x-1/2 transition-all duration-300 ease-in-out"></span>
               <span className="relative z-10"><a href="/">ORDER NOW</a></span>
            </button>
         </div>

         <div className="bg-cover bg-center z-10  px-5  md:px-10 py-10 md:y-15 space-y-1 md:space-y-4 relative overflow-hidden rounded-xs"
            style={{ backgroundImage: `url(${product4})` }}
         >
            <div className="absolute top-2 -right-12 rotate-45 bg-red-600 text-white text-xs font-bold px-12 py-1 shadow-lg">NEW</div>
            <p className=' text-3xl md:text-4xl text-white font-extrabold '>Sandwitch Spicy <br />Burger</p>
            <p className='text-white hidden md:block font-semibold max-w-80'>Completely synergize resource taxing relation ships via premier niche markets. Professionally cultivate one-to-one customer service.</p>
            <p className='text-3xl  md:text-5xl font-extrabold text-white'>$7.89</p>
            <button className="relative cursor-pointer group overflow-hidden py-2 px-6 font-medium rounded-sm w-fit mt-4 text-black bg-amber-300">
               <span className="absolute inset-y-0 left-1/2 w-0 bg-white group-hover:w-full transform -translate-x-1/2 transition-all duration-300 ease-in-out"></span>
               <span className="relative z-10"><a href="/">ORDER NOW</a></span>
            </button>
         </div>

         </div>
      </div>
   )
}

export default Section6
