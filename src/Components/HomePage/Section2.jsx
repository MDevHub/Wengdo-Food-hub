	import React, { useRef } from 'react'
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
	const scrollRef = useRef(null)

	const scroll = (direction) => {
		const { current } = scrollRef
		if (direction === 'left') {
			current.scrollBy({ left: -300, behavior: 'smooth' })
		} else {
			current.scrollBy({ left: 300, behavior: 'smooth' })
		}
	}

	return (
		<section className="w-full px-4 sm:px-6 md:px-10 lg:px-20 xl:px-28 py-16 bg-gradient-to-b from-yellow-300 to-red-100 overflow-hidden">
			<div className="text-center space-y-4">
				<h2 className="text-white text-4xl font-bold">Our Products</h2>
				<p className="text-white text-md font-semibold max-w-2xl mx-auto">
					You’re obviously a pizza fanatic like us. You know what else we’re fanatics about? Friends we love seeing.
				</p>
			</div>

			<div className="mt-12 overflow-hidden">
			{/* Product Scrollable Row */}
			<div
				ref={scrollRef}
				className="
					flex sm:grid-cols-2 lg:grid lg:grid-cols-4 gap-6 
					overflow-x-auto lg:overflow-hidden overflow-y-hidden no-scrollbar transition-all duration-300 py-4
				"
			>
				{products.map((item, index) => (
					<div
					key={index}
					className="
						w-full 
						min-w-[280px] md:min-w-auto lg:min-w-auto 
						max-w-[400px] sm:max-w-full  lg:max-w-full 
						rounded-2xl group bg-white shadow-xl hover:shadow-xl p-4 flex flex-col items-center text-center mx-auto transition-transform duration-400 hover:scale-[1.02] relative
					"
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
				))}
			</div>

			{/* Arrows only for smaller screens */}
			<div className="flex justify-center gap-4 mt-6 lg:hidden">
				<button
					onClick={() => scroll('left')}
					className="rounded-full w-10 h-10 text-xl font-bold flex items-center justify-center border bg-white border-gray-500 hover:bg-red-600 hover:text-white transition-all"
				>
					❮
				</button>
				<button
					onClick={() => scroll('right')}
					className="rounded-full w-10 h-10 text-xl font-bold flex items-center justify-center border bg-white border-gray-500 hover:bg-red-600 hover:text-white transition-all"
				>
					❯
				</button>
			</div>
			</div>
		</section>
	)
}

export default Section2
