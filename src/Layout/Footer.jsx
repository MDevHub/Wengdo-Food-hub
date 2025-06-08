   import React from 'react'
   import logo2 from '../assets/Images/logo2.png'
   import footerImg from '../assets/Images/4.jpg'

   const Footer = () => {
   return (
      <footer
         className="text-white py-10 px-4 sm:px-9 md:px-13 lg:px-16 xl:px-28 bg-cover bg-right"
         style={{
         backgroundImage: `linear-gradient(to right, black, rgba(31, 41, 55)), url(${footerImg})`
         }}
      >
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <div className='text-center justify-center lg:text-left'>
               <h3 className="text-lg font-bold mb-2 relative inline-block">
                  Contact Info
                  <span className="block w-1/2 h-0.5 bg-red-600 mt-1"></span>
               </h3>
               <p className="mt-4 text-lg font-bold">(234) 913 552 4436</p>
               <p className="mt-2 text-sm text-gray-400">musbaudeenabdulrahman040@gmail.com</p>
               <p className="mt-2 text-sm text-gray-400">contact@gmail.com</p>
            </div>

            {/* Center Logo */}
            <div className="flex flex-col items-center text-center">
               <img src={logo2} alt="Logo 2" className="h-20 w-auto mb-3" />
               <p className="font-semibold text-lg">wengdo</p>
               <p className="text-sm mt-1">46, Lawal, Animashaun str, Oke Ota Ona.</p>
            </div>

            {/* Opening Hours */}
            <div>
               <h3 className="text-lg font-bold mb-2 relative inline-block">
                  Opening Hour
                  <span className="block w-1/2 h-0.5 bg-red-600 mt-1"></span>
               </h3>
               <div className="mt-4 space-y-2 text-gray-400 text-sm">
                  <div className="flex justify-between">
                     <span>Tuesday - Saturday</span>
                     <span>8AM - 5AM</span>
                  </div>
                  <div className="flex justify-between">
                     <span>Sunday</span>
                     <span>12AM - 8PM</span>
                  </div>
                  <div className="flex justify-between">
                     <span>Monday</span>
                     <span>Off</span>
                  </div>
               </div>
            </div>
         </div>
         <hr className="border-t border-gray-400 opacity-40 mt-20 px-5 lg:px-28" />

         <div className="flex justify-between items-center text-sm text-gray-400 py-4">
            <span>© 2025 Musbaudeen</span>
            <span>All rights reserved.</span>
         </div>
      </footer>
   )
   }

export default Footer
