import React, { useState, useEffect } from 'react'
import product7 from '../../assets/Images/7.jpg'
import product8 from '../../assets/Images/8.jpg'
import product9 from '../../assets/Images/9.jpg'
import product10 from '../../assets/Images/10.jpg'

const products = [
	{ img: product7, name: 'Chicken Burger', desc: 'Savory ingredients stacked with bold local flavor.', price: '$19.00' },
	{ img: product8, name: 'Grand Italia', desc: 'Flavors crafted from rich Italian inspirations.', price: '$20.00' },
	{ img: product9, name: 'Meat Burger', desc: 'Juicy meats with a blend of homegrown spices.', price: '$17.00' },
	{ img: product10, name: 'Sweet Burger', desc: 'A sweet mix of flavor and tradition, sweet burger.', price: '$10.00' },
]

const Section2 = () => {
	const [index, setIndex] = useState(0)
	const [fade, setFade] = useState(true)
	const [cardsToShow, setCardsToShow] = useState(1)

	// Update cardsToShow based on window width
	useEffect(() => {
		const updateCardsToShow = () => {
			const w = window.innerWidth
			if (w >= 1024) setCardsToShow(4)
			else if (w >= 768) setCardsToShow(3)
			else if (w >= 640) setCardsToShow(2)
			else setCardsToShow(1)
		}

		updateCardsToShow()
		window.addEventListener('resize', updateCardsToShow)
		return () => window.removeEventListener('resize', updateCardsToShow)
	}, [])

	const total = products.length

	// Handle fade animation for transitions
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
			// cycle backward infinitely
			setIndex((prev) => (prev - 1 + total) % total)
			setFade(true)
		}, 300)
	}

	const nextSlide = () => {
		setFade(false)
		setTimeout(() => {
			// cycle forward infinitely
			setIndex((prev) => (prev + 1) % total)
			setFade(true)
		}, 300)
	}

	// Helper to determine if a product is visible in current window (index to index + cardsToShow - 1), with looping
	const isVisible = (i) => {
		for (let offset = 0; offset < cardsToShow; offset++) {
			if ((index + offset) % total === i) return true
		}
		return false
	}

	return (
		<section className="w-full px-4 sm:px-6 md:px-10 lg:px-20 xl:px-28 py-16 bg-gradient-to-b from-yellow-300 to-red-100 overflow-hidden">
			<div className="text-center space-y-4">
				<h2 className="text-white text-4xl font-bold">Our Products</h2>
				<p className="text-white text-md font-semibold max-w-2xl mx-auto">
					You’re obviously a pizza fanatic like us. You know what else we’re fanatics about? Friends we love seeing.
				</p>
			</div>

			{/* Carousel container */}
			<div className="relative mt-12">
				{/* Cards container */}
				<div className="flex justify-center gap-6 overflow-visible">
					{products.map((item, i) => {
						const visible = isVisible(i)
						return (
							<div
								key={i}
								className={`w-full
									sm:w-[45%]
									md:w-[30%]
									lg:w-[22%]
									bg-white
									rounded-2xl
									p-4
									text-center
									shadow-xl
									flex-shrink-0
									transition-all duration-700 ease-in-out
									cursor-pointer
									${visible ? 'opacity-100 translate-y-0' : 'opacity-30 -translate-y-8 pointer-events-none'}
								`}
								style={{ transitionProperty: 'opacity, transform' }}
							>
								<img src={item.img} alt={item.name} className="h-auto w-full object-cover mb-5 rounded-full" />
								<p className="text-black text-lg font-bold">{item.name}</p>
								<p className="text-sm italic text-gray-700 mt-1">{item.desc}</p>
								<p className="text-red-700 font-bold mt-3">{item.price}</p>
								<div className="w-full transition-all duration-500 ease-in-out mt-3">
									<button className="bg-red-700 text-white px-5 py-2 text-sm hover:bg-black transition-all rounded-full cursor-pointer">
										ORDER NOW
									</button>
								</div>
							</div>
						)
					})}
				</div>

				{/* Arrows bottom center */}
				<div className="flex justify-center gap-6 mt-6">
					<button
						onClick={prevSlide}
						className="rounded-full w-12 h-12 text-2xl font-bold flex items-center justify-center border bg-white border-gray-500 hover:bg-red-600 hover:text-white transition-all"
						aria-label="Previous"
					>
						❮
					</button>
					<button
						onClick={nextSlide}
						className="rounded-full w-12 h-12 text-2xl font-bold flex items-center justify-center border bg-white border-gray-500 hover:bg-red-600 hover:text-white transition-all"
						aria-label="Next"
					>
						❯
					</button>
				</div>
			</div>
		</section>
	)
}

export default Section2
