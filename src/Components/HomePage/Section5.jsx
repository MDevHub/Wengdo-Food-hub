import React from 'react'
import pizzabg from '../../assets/Images/pizza bg.jpg'

const Section5 = () => {
  return (
      <div
         className="md:h-[50vh] bg-fixed bg-cover bg-center z-10"
         style={{ backgroundImage: `url(${pizzabg})` }}
      >
         <div className="text-center py-25 space-y-5 bg-blend-hard-light z-50">
            <p className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sans">
               Some Of Our Best
            </p>
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-300 italic font-serif underline">
               Combo Offers
            </p>
         </div>
      </div>
  )
}

export default Section5