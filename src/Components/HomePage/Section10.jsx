   import React, { useState } from 'react';
   import { Swiper, SwiperSlide } from 'swiper/react';
   import { Autoplay } from 'swiper/modules';
   import 'swiper/css';
   import 'swiper/css/autoplay';
   import Img1 from '../../assets/Images/1.jpg';
   import Img2 from '../../assets/Images/2.jpg';
   import Img3 from '../../assets/Images/3.jpg';
   import Img4 from '../../assets/Images/4.jpg';
   import Img5 from '../../assets/Images/5.jpg';

   const Section10 = () => {
   const images = [Img1, Img2, Img3, Img4, Img5];
   const [lightboxOpen, setLightboxOpen] = useState(false);
   const [currentImage, setCurrentImage] = useState(null);

   const openLightbox = (img) => {
      setCurrentImage(img);
      setLightboxOpen(true);
   };

   const closeLightbox = () => {
      setLightboxOpen(false);
      setCurrentImage(null);
   };

   return (
      <div className=''>
         <Swiper
            modules={[Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            breakpoints={{
               640: { slidesPerView: 2 },
               768: { slidesPerView: 3 },
               1024: { slidesPerView: 4 },
               1280: { slidesPerView: 5 },
         }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            className="overflow-hidden active:cursor-grab lg:active:cursor-default"
         >
         {images.map((src, index) => (
            <SwiperSlide key={index}>
               <div className="relative group">
               <img
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-auto cursor-pointer"
                  onClick={() => openLightbox(src)}
               />
               <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-20 flex items-center justify-center transition-opacity duration-300">
                  {/* Expand icon (simple + magnifying glass icon) */}
                  <svg
                     className="w-12 h-12 text-white"
                     fill="none"
                     stroke="currentColor"
                     viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     strokeWidth="2"
                     d="M15 10l4.553-4.553a1 1 0 011.414 1.414L16.414 12 20.967 15.553a1 1 0 01-1.414 1.414L15 13.414l-3.553 3.553a1 1 0 01-1.414-1.414L13.586 12l-3.553-3.553a1 1 0 011.414-1.414L15 10z"
                     />
                  </svg>
               </div>
               </div>
            </SwiperSlide>
         ))}
         </Swiper>

         {lightboxOpen && (
         <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Backdrop */}
            <div
               className="absolute inset-0 bg-black opacity-50"
               onClick={closeLightbox}
            ></div>
            {/* Modal Content */}
            <div className="relative bg-white p-4 rounded max-w-3xl w-4/5">
               <img
               src={currentImage}
               alt="Enlarged"
               className="w-full h-auto"
               />
               <button
               onClick={closeLightbox}
               className="absolute top-2 right-2 text-gray-700 bg-white rounded-full p-2"
               >
               &#x2715;
               </button>
            </div>
         </div>
         )}
      </div>
   );
   };

   export default Section10;
