import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

// page and layout imports
import HomePage from './pages/HomePage/HomePage'
import Header from './components/Header/Header'

// apollo client
const client = new ApolloClient({
	uri: 'http://localhost:1337/graphql',
	cache: new InMemoryCache()
})

function App() {
	return (
		<div className='App'>
			<Router>
				<ApolloProvider client={client}>
					<Header />
					<Routes>
						<Route exact path="/" element={<HomePage />} />
					</Routes>
				</ApolloProvider>
			</Router>
		</div>
	)
}

export default App;