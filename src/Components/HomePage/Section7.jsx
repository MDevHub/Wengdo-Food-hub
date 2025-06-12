import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import TestimonialImg from '../../assets/Images/testimonial1.png';
import AuthorImg from '../../assets/Images/author1.jpg';

const Section7 = () => {
const testimonials = [
      {
         quote: "This product transformed our business operations, leading to a 50% increase in efficiency, A game-changer for our strategy The ROI has been phenomenal",
         author: "John Doe",
         role: "CEO, ExampleCorp",
      },
      {
         quote: "The team was professional and the results exceeded our expectations. Highly recommended!, Outstanding service and support. Our customer satisfaction has never been higher.",
         author: "Jane Smith",
         role: "CTO, TechSolutions",
      },
      {
         quote: "Outstanding service and support. Our customer satisfaction has never been higher, A game-changer for our strategy The ROI has been phenomenal",
         author: "Alice Johnson",
         role: "Head of Marketing, BrightMedia",
      },
      {
         quote: "A game-changer for our strategy. The ROI has been phenomenal,This product transformed our business operations, leading to a 50% increase in efficiency.",
         author: "Bob Lee",
         role: "CMO, GrowFast Inc.",
      },
   ];
// className="w-full max-w-xl active:cursor-grab"
   return (
      <div className="flex justify-center bg-contain bg-right-bottom bg-no-repeat md:h-[60vh] bg-gray-900"
         style={{ backgroundImage: `url(${TestimonialImg})` }}
      >
         <Swiper
             modules={[Pagination /* (plus Navigation, etc., if used) */]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}                // enable infinite loop
            pagination={{ clickable: true }}  // enable clickable dots
            className="w-full max-w-3xl active:cursor-grab"
         >
         {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
               <div className="flex flex-col items-center md:items-start md:flex-row gap-10 md:gap-20 py-20 px-5">
                  {/* <img src={TestimonialImg} alt="Quote" className="w-12 h-12 mb-4" /> */}
                  <div className='w-40 h-30  md:w-80 md:h-70 rounded-full mb-2'>
                        <img src={AuthorImg} alt={t.author} className="full rounded-full" />
                  </div>
                  <div  className=''>
                     <blockquote className="text-gray-100 italic mb-4">&ldquo;{t.quote}&rdquo;</blockquote>
                     <p className="font-semibold text-red-600">{t.author}</p>
                     <p className="text-sm text-gray-200">{t.role}</p>
                  </div>
               </div>
            </SwiperSlide>
         ))}
         </Swiper>
      </div>
   );
   };

   export default Section7;
