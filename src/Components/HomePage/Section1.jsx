	import React, { useEffect, useState } from 'react'
	import burger1 from '../../assets/Images/burger1.png'
	import burger2 from '../../assets/Images/burger2.png'
	import burger3 from '../../assets/Images/burger3.jpg'

	const slides = [
		{
			topText: 'Hot stuff',
			foodName: 'Veg Burger ...',
			desc: 'With bacon, tasty ham, pineapple and onion.',
			subText: 'Savor every bite of our freshly made burger, where juicy layers of flavor meet a perfectly toasted bun. Crafted with premium ingredients.',
			price: 'Only $69',
			img: burger1
		},
		{
			topText: 'Happy hour',
			foodName: 'Mexican Burger ...',
			desc: 'With bacon, tasty ham, pineapple and onion.',
			subText: 'Experience spicy flavor in every bite — a fiery fusion of bold spices, sizzling meats, and fresh toppings that awaken your taste buds. It’s a flavor-packed adventure.',
			price: 'Only $59',
			img: burger2
		},
		{
			topText: 'Hot stuff',
			foodName: 'Pizza with Cheese ...',
			desc: 'With bacon, tasty ham, pineapple and onion.',
			subText: 'Melting cheese madness — every slice oozes with rich, creamy layers of mozzarella and cheddar. A perfect harmony of flavors that stretches satisfaction.',
			price: 'Only $40',
			img: burger3
		}
	]

	const Section1 = () => {
	const [index, setIndex] = useState(0)
	const [fade, setFade] = useState(false)

	useEffect(() => {
	setFade(false)
	const timeout = setTimeout(() => {
		setFade(true)
	}, 100)
	return () => clearTimeout(timeout)
	}, [index])


	const prevSlide = () => {
		setFade(false)
		setTimeout(() => {
			setIndex((index - 1 + slides.length) % slides.length)
			setFade(true)
		}, 300)
	}

	const nextSlide = () => {
		setFade(false)
		setTimeout(() => {
			setIndex((index + 1) % slides.length)
			setFade(true)
		}, 300)
	}

	const { topText, foodName, desc, subText, price, img } = slides[index]

	return (
		<section className="h-screen md:h-[80vh] bg-red-800 pt-0 px-4 sm:px-9 md:px-13 lg:px-16 xl:px-28 text-white relative overflow-hidden">
			<div className="h-full flex items-center justify-between flex-col lg:flex-row transition-opacity duration-700"
					style={{ opacity: fade ? 1 : 0 }}
			>
				{/* Left Content */}
				<div className={`flex-1 flex flex-col justify-center space-y-4 pt-32 lg:pt-0 transform transition-all duration-700 ease-in-out ${
					fade ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
				}`}>
					<p className={`text-yellow-400 text-xl sm:text-2xl md:text-3xl italic font-serif font-bold transform transition-all duration-700 ease-out ${
						fade ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'
						}`} style={{ transitionDelay: '100ms' }}>
						{topText}
					</p>

					<h1 className={`text-2xl md:text-4xl sm:text-3xl font-extrabold font-serif transform transition-all duration-800 ease-out ${
						fade ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'
						}`} style={{ transitionDelay: '200ms' }}>
						{foodName}
					</h1>

					<p className={`text-[16px] md:text-2xl text-gray-100 transform transition-all duration-700 ease-out ${
						fade ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'
						}`} style={{ transitionDelay: '300ms' }}>
						{desc}
					</p>

					<p className={`text-sm text-gray-300 font-serif font-extrabold italic transform transition-all duration-900 ease-out ${
						fade ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'
						}`} style={{ transitionDelay: '400ms' }}>
						{subText}
					</p>

					<button className="relative cursor-pointer group overflow-hidden py-3 px-9 font-medium rounded-sm w-fit mt-4 text-black bg-white">
						{/* Animated BG from center outwards */}
						<span className="absolute inset-y-0 left-1/2 w-0 bg-amber-400 group-hover:w-full transform -translate-x-1/2 transition-all duration-700 ease-in-out"></span>
						
						{/* Text stays above */}
						<span className="relative z-10"><a href="/">ORDER NOW</a></span>
					</button>

				</div>

				{/* Right Image */}
				<div className="h-screen top-2 flex-1 flex justify-center items-end relative">
					<img src={img} alt={foodName} className="h-[70%] object-contain" />
	
				</div>
			</div>

			{/* Arrows - Left and Right */}
			<button
				onClick={prevSlide}
				className="absolute top-1/2 -translate-y-1/2 left-3 border border-transparent shadow-2xl bg-[#ffffff2c] hover:bg-yellow-400 text-white w-13 h-13 font-bold cursor-pointer flex items-center justify-center transition-all duration-300"
			>
				❮
			</button>
			<button
				onClick={nextSlide}
				className="absolute cursor-pointer top-1/2 -translate-y-1/2 right-3 border border-transparent shadow-2xl bg-[#ffffff2c] hover:bg-yellow-400 text-white w-13 h-13 flex items-center justify-center transition-all duration-300"
			>
				❯
			</button>
		</section>
	)
}

export default Section1
