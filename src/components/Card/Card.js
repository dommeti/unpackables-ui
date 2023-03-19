import React from "react"
import "./Card.scss"

const Card = ({ title, description, image, url }) => {
	return (
		<a className="card" href={url} target="_blank" rel="noopener noreferrer">
			{image && <img src={image} alt={title} />}
			<div className="card-content">
				<h2>{title}</h2>
				{description && <p>{description}</p>}
			</div>
		</a>
	);
};

export default Card;