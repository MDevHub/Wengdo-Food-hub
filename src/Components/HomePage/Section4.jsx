	import React from 'react'
	import burger2 from '../../assets/Images/burger-1.png'
	import burger3 from '../../assets/Images/burger3.jpg'

	const Section4 = () => {
	return (
			<div className='bg-slate-200 py-15 space-y-3 px-4 sm:px-9 md:px-13 lg:px-16 xl:px-28 z-50'>
				<h1 className='text-center text-black font-bold text-3xl'>Our Bestsellers</h1>
				<p className='text-sm text-gray-800 text-center '>Override the digital divide with additional clickthroughs from immersion <br /> along the information highway.</p>
				<div className='text-sm grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center justify-center object-center text-center '>
					<div className='text-center hidden sm:block '>
						<img src={burger2} alt="burger" className=''/>
						<p className='text-xl font-bold hover:text-red-800 cursor-pointer'>Cheese Burger</p>
						<p className='max-w-70 flex m-auto text-center items-center'>Our flavor and ingredients to build our local burgers</p>
					</div>
					<div className='text-center'>
						<img src={burger3} alt="burger" className=''/>
						<p className='text-xl font-bold hover:text-red-800 cursor-pointer'>Cheese Burger</p>
						<p className='max-w-70 flex m-auto text-center items-center'>Our flavor and ingredients to build our local burgers</p>
					</div>
					<div className='text-center hidden md:block'>
						<img src={burger2} alt="burger" className=''/>
						<p className='text-xl font-bold hover:text-red-800 cursor-pointer'>Cheese Burger</p>
						<p className='max-w-70 flex m-auto text-center items-center'>Our flavor and ingredients to build our local burgers</p>
					</div>
				</div>
			</div>
	) 
	
}

export default Section4