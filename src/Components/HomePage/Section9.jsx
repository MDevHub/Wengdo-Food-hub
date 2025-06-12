import React from 'react'
import serviceImg from '../../assets/Images/serviceImg.jpg'
import service1 from '../../assets/Images/service-1.png'
import service2 from '../../assets/Images/service-2.png'
import service3 from '../../assets/Images/service-3.png'
import service4 from '../../assets/Images/service-4.png'

const Section9 = () => {
  return (
      <div className='bg-contain bg-left-bottom bg-no-repeat px-4 sm:px-9 md:px-13 lg:px-16 xl:px-28 py-20'
         style={{
            backgroundImage: `url(${serviceImg})`,
         }}
      >
         <div className='grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5'>
            <div className='px-5 md:px-10 py-15 items-center text-center border border-black space-y-3 border-dashed'>
               <img src={service1} alt="Service1" className='m-auto'/>
               <p className='font-bold'>Free Shipping on <span><p className='font-bold'>first Order</p></span></p>
               <p className='text-gray-900 text-sm'>Sign up for updates and <br />get free shipping</p>
            </div>

             <div className='px-5 md:px-10 py-15 items-center text-center border border-black space-y-3 border-dashed'>
               <img src={service2} alt="Service1" className='m-auto'/>
               <p className='font-bold'>Free Shipping on <span><p className='font-bold'>first Order</p></span></p>
               <p className='text-gray-900 text-sm'>Sign up for updates and <br /> get free shipping</p>
            </div>

             <div className='px-5 md:px-10 py-15 items-center text-center border border-black space-y-3 border-dashed'>
               <img src={service3} alt="Service1" className='m-auto'/>
               <p className='font-bold'>Free Shipping on <span><p className='font-bold'>first Order</p></span></p>
               <p className='text-gray-900 text-sm'>Sign up for updates and <br /> get free shipping</p>
            </div>

             <div className='px-5 md:px-10 py-15 items-center text-center border border-black space-y-3 border-dashed'>
               <img src={service4} alt="Service1" className='m-auto'/>
               <p className='font-bold'>Free Shipping on <span><p className='font-bold'>first Order</p></span></p>
               <p className='text-gray-900 text-sm'>Sign up for updates and <br /> get free shipping</p>
            </div>
         </div>
      </div>
  )
}

export default Section9