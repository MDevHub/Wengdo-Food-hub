import React from 'react'
import testimonial1 from '../../assets/Images/testimonial1.png'
import author1 from '../../assets/Images/author1.jpg'

const Section7 = () => {
  return (
      <div className='md:h-[60vh] bg-contain bg-no-repeat bg-gray-950 bg-bottom-right px-5 py-10 '
         style={{ backgroundImage: `url(${testimonial1})` }}
      >
         <div className='flex flex-col md:flex-row gap-10 text-white  my-0 mx-auto'>
            <div className=''>
               <img src={author1} alt="author1" className=''/>
            </div>
            <div className=''>
               <p className='mb-10 max-w-150 text-sm italic'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, nihil laudantium. Quidem in voluptatum quas obcaecati cumque rem pariatur, deserunt hic, autem accusantium voluptas similique eum, dolor laborum. Earum, quaerat.r</p>
               <p className='text-red-600 font-semibold '> - Muheez </p>
               <p>Director of Pizza</p>
            </div>

         </div>
      </div>
  )
}

export default Section7