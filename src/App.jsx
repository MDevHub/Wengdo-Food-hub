import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './Layout/NavBar'
import Footer from './Layout/Footer'
import ZigzagDivider from './Layout/ZigZag'
import Home from './Home'
import About from './About'



export default function App() {
	return (
		<Router>
			<div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
				<NavBar />
				{/* <ZigzagDivider /> */}
				<main style={{ flexGrow: 1 }}>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
					</Routes>
				</main>
				<Footer />
			</div>
		</Router>
	)
}
