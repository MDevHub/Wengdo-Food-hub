   import React, { useState } from 'react'
   import { Link } from 'react-router-dom'
   import { FaEnvelope, FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram, FaBars, FaTimes } from 'react-icons/fa'
   import logo from '../assets/Images/logo.png'

   const Navbar = () => {
   const [menuOpen, setMenuOpen] = useState(false)

   const toggleMenu = () => setMenuOpen(!menuOpen)

   return (
      <header>
         <style>
         {`
            @keyframes scrollLine {
               0% { transform: translateX(0%); }
               100% { transform: translateX(-50%); }
            }
         `}
         </style>

         {/* First Layout */}
         <div className="bg-gray-800 text-slate-300 px-5 lg:px-28 pt-2 pb-4 relative text-sm">
            <div className="flex justify-between items-center">
               <div className="flex items-center space-x-6">
                  <span className='text-center'>5erving to whole Nigeria</span>
                  <div className="hidden sm:flex items-center space-x-1">
                     <FaEnvelope />
                     <span> musbaudeenabdulrahman040@gmail.com</span>
                  </div>
               </div>
               <div className="hidden md:flex items-center space-x-6 text-lg">
                  <a
                     href="https://www.linkedin.com/in/musbaudeen-abdulrahman-3a0127369?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BgvLz5WXpSK2Eak6DllFl8A%3D%3D"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                  <FaLinkedinIn />
                  </a>
                  <FaFacebookF className='cursor-pointer' />
                  <FaTwitter className='cursor-pointer' />
                  <FaInstagram className='cursor-pointer' />
               </div>
            </div>

            {/* Scrolling dashed underline */}
            <div className="absolute bottom-1 left-0 w-full overflow-hidden h-[1px]">
               <div
                  className="w-[200%] h-full border-t border-gray-400"
                  style={{
                  borderStyle: 'dashed',
                  borderWidth: '2px',
                  borderSpacing: '6px',
                  animation: 'scrollLine 90s linear infinite'
                  }}
               />
               </div>
            </div>

            {/* Second Layout */}
            <div className="bg-red-700 text-white px-5 lg:px-28 py-6  flex justify-between items-center relative">
               <div className="flex items-center">
                  <img src={logo} alt="Logo" className="absolute top-[1px] h-40 w-auto object-contain z-30" />
               </div>

               {/* Hamburger */}
               <div className="block sm:hidden z-40 cursor-pointer text-xl" onClick={toggleMenu}>
                  {menuOpen ? <FaTimes /> : <FaBars />}
               </div>

               {/* Mobile Dropdown Menu */}
               {menuOpen && (
                  <div className="fixed top-[88px] bg-red-700 text-white shadow-md flex flex-col items-start w-full pl-5 py-4 space-y-3 z-30 transition-all duration-300 lg:hidden">
                     <Link to="/" onClick={toggleMenu} className="hover:text-yellow-400 font-semibold transition-colors">Home</Link>
                     <Link to="/about" onClick={toggleMenu} className="hover:text-yellow-400 font-semibold transition-colors">About</Link>
                     <Link to="/" onClick={toggleMenu} className="hover:text-yellow-400 font-semibold transition-colors">System</Link>
                     <Link to="/" onClick={toggleMenu} className="hover:text-yellow-400 font-semibold transition-colors">Blog</Link>
                     <Link to="/" onClick={toggleMenu} className="hover:text-yellow-400 font-semibold transition-colors">Contact</Link>
                  </div>
               )}

               <nav className="hidden sm:flex gap-9 font-bold text-sm items-center font-sans">
                  <Link to="/" className="relative group">
                     <span className="text-white group-hover:text-yellow-400 transition-colors duration-300">Home</span>
                     <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-yellow-400 transition-all duration-500 group-hover:w-full"></span>
                  </Link>
                  <Link to="/about" className="relative group">
                     <span className="text-white group-hover:text-yellow-400 transition-colors duration-300">About</span>
                     <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-yellow-400 transition-all duration-500 group-hover:w-full"></span>
                  </Link>
                  <Link to="/" className="relative group">
                     <span className="text-white group-hover:text-yellow-400 transition-colors duration-300">System</span>
                     <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-yellow-400 transition-all duration-500 group-hover:w-full"></span>
                  </Link>
                  <Link to="/" className="relative group">
                     <span className="text-white group-hover:text-yellow-400 transition-colors duration-300">Blog</span>
                     <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-yellow-400 transition-all duration-500 group-hover:w-full"></span>
                  </Link>
                  <Link to="/" className="relative group">
                     <span className="text-white group-hover:text-yellow-400 transition-colors duration-300">Contact</span>
                     <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-yellow-400 transition-all duration-500 group-hover:w-full"></span>
                  </Link>
                  <div className="hidden lg:flex items-center space-x-4">
                     <div className="w-[1px] h-13 bg-[#ffffffad]"></div>
                     <div className="flex flex-col items-start">
                     <span className="text-yellow-400 font-bold text-lg">Order Now</span>
                     <span className="text-white text-sm mt-1">+234 913 552 4436</span>
                     </div>
                  </div>
            </nav>
         </div>
      </header>
   )
}

export default Navbar
