import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './HomePage.scss'
import useFetch from '../../hooks/useFetch'

import { TwitterEmbed, YouTubeEmbed } from 'react-social-media-embed'
import LinkPreview from '../../hooks/LinkPreview'

export default function HomePage() {
	const { error, loading, nuggets } = useFetch('http://localhost:1337/api/nuggets')

	return (
		<React.Fragment>
			<div className='nugget-masonry'>
				{loading ? (
					<p>Loading...</p>
				) : (
					<div>
						{nuggets.map(item => (
							<div key={item.id} className="nugget-card">
								{/* <h2>{item.attributes.Title}</h2>
										<h3>{item.attributes.Source}</h3> */}
								{/* <Link to={item.attributes.URL} target='_blank'>{item.attributes.URL}</Link> */}
								<div style={{ display: 'flex', justifyContent: 'center' }}>
									{item.attributes.Source === 'Twitter' ? <TwitterEmbed placeholderDisabled url={item.attributes.URL} width="100%" /> :
										item.attributes.Source === 'Blog' ?
											<LinkPreview
												url={item.attributes.URL}
											/> :
											item.attributes.Source === 'Youtube' ? <YouTubeEmbed placeholderDisabled url={item.attributes.URL} width="100%" /> :
												<h3>Not a blog or tweet</h3>}
								</div>
							</div>
						))
						}
					</div>
				)}
			</div>
		</React.Fragment>
	)

}