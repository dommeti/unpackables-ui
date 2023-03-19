import { useEffect, useState } from 'react'

const useFetch = (url) => {
	const [nuggets, setNuggets] = useState([])
	const [error, setError] = useState(null)
	const [loading, setLoading] = useState(false)


	useEffect(() => {
		const fetchNuggets = async () => {
			setLoading(true)

			try {
				const res = await fetch(url)
				const json = await res.json()

				// console.log(json.data)

				if (Array.isArray(json.data)) {
					setNuggets(json.data);
				} else {
					setNuggets(Object.values(json.data));
				}

				setLoading(false)

			} catch (error) {

				setError(error)
				setLoading(false)

			}
		}

		fetchNuggets()
	}, [url])

	return { nuggets, error, loading }
}

export default useFetch