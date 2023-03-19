import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from '../components/Card/Card';

const LinkPreview = ({ url }) => {
	const [metadata, setMetadata] = useState({});
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchMetadata = async () => {
			try {
				const response = await axios.get(
					`https://api.linkpreview.net/?key=d092f004958e0fc75a696aecfdfa3355&q=${encodeURIComponent(url)}`
				);
				setMetadata(response.data);
			} catch (error) {
				console.error(error);
			}
			setLoading(false);
		};
		fetchMetadata();
	}, [url]);

	if (loading) {
		return <p>Loading...</p>;
	}

	return (
		<Card
			title={metadata.title}
			description={metadata.description}
			image={metadata.image}
			url={metadata.url}
		/>
	);
};

export default LinkPreview;