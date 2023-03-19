import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// page and layout imports
import HomePage from './pages/HomePage/HomePage'
import Header from './components/Header/Header'

function App() {
	return (
		<div className='App'>
			<Router>
				<Header />
				<Routes>
					<Route exact path="/" element={<HomePage />} />
				</Routes>
			</Router>
		</div>
	)
}

export default App;