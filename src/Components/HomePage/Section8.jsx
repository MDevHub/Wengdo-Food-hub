import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import deliveryImg from '../../assets/Images/delivery.png'
import appImg from '../../assets/Images/app.png'

const Section8 = () => {
	useEffect(() => {
		AOS.init({ duration: 1000, once: false })
	}, [])

	return (
		<div
			className='section8-wrapper md:h-[65vh] p-5 md:p-10 bg-red-800 bg-right-bottom bg-contain bg-no-repeat transform transition-all duration-700 ease-out'
			style={{
				backgroundImage: `url(${appImg})`,
			}}
		>
			{/* Inline style for hiding bg on small screens */}
			<style>{`
            @media (max-width: 768px) {
               .section8-wrapper {
                  background-image: none !important;
               }
            }
         `}</style>

			<div className='flex justify-center flex-col md:flex-row gap-16 my-0 mx-auto text-gray-100'>
				<div className='object-cover items-center flex justify-center' data-aos="slide-right">
					<img src={deliveryImg} alt="" className='w-auto md:h-[300px]' />
				</div>
				<div className='space-y-3 text-center md:text-start'>
					<p className='font-serif italic text-2xl lg:text-3xl'>We Guaranttee</p>
					<p className='font-bold text-4xl lg:text-5xl'>30 Minute Delivery</p>
					<p className='text-sm font-bold'>If you’re having a meeting, working late at night and need an extra push.</p>
					<p className='font-bold'>Let us know and we will be there</p>

					<button className="relative cursor-pointer group overflow-hidden py-3 px-9 font-medium rounded-sm w-fit mt-4 text-black bg-amber-300">
						<span className="absolute inset-y-0 left-1/2 w-0 bg-white group-hover:w-full transform -translate-x-1/2 transition-all duration-200 ease-in-out"></span>
						<span className="relative z-10"><a href="/">ORDER NOW</a></span>
					</button>
				</div>
			</div>
		</div>
	)
}

export default Section8
