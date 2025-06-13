import React from 'react'
import pizzabg from '../../assets/Images/product3.jpg'

const Section4 = () => {
  return (
      <div
         className="md:h-[60vh] bg-fixed bg-cover bg-center z-10"
         style={{ backgroundImage: `url(${pizzabg})` }}
      >
         <div className="text-center py-25 space-y-5 bg-blend-hard-light z-50">
            <p className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sans">
               Big taste
            </p>
            <p className="text-2xl ml-30 sm:text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-300 italic font-serif underline">
               Great taste
            </p>
            <p className='text-white max-w-lg m-auto'>Nam sollicitudin tincidunt dolor. Nunc sed feugiat tortor. In auctor odio odio, ut auctor enim tempus.</p>
         </div>
      </div>
  )
}

export default Section4