import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './Layout/NavBar'
import Footer from './Layout/Footer'
	

export default function App() {
	return (
		<Router>
			<div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
				<NavBar />
				<main style={{ flexGrow: 1, padding: '1rem' }}>
					<Routes>
						
					</Routes>
				</main>
				<Footer />
			</div>
		</Router>
	)
}
