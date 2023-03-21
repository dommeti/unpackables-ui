import React from 'react'
import './HomePage.scss'

import { TwitterEmbed, YouTubeEmbed } from 'react-social-media-embed'
import LinkPreview from '../../hooks/LinkPreview'
import { useQuery, gql } from '@apollo/client'

const NUGGETS = gql`
	query GetNUGGETS {
		nuggets(sort: "date_published:desc") {
			data {
				attributes {
					title,
					source,
					url,
				}
				id
			}
		}
	}
`

export default function HomePage() {
	const { error, loading, data } = useQuery(NUGGETS)

	console.log(data)

	return (
		<React.Fragment>
			<div className='main-content'>
				{/* <p>Number of items: {data.length}</p> */}
				<div className='nugget-masonry'>
					{loading ? (
						<p>Loading...</p>
					) : error ? (<p>Error</p>) : (
						<div>
							{data.nuggets.data.map(item => (
								<div key={item.id} className="nugget-card">
									{/* <h2>{item.attributes.Title}</h2>
										<h3>{item.attributes.Source}</h3> */}
									{/* <Link to={item.attributes.URL} target='_blank'>{item.attributes.URL}</Link> */}
									<div style={{ display: 'flex', justifyContent: 'center' }}>
										{item.attributes.source === 'Twitter' ? <TwitterEmbed placeholderDisabled url={item.attributes.url} width="100%" /> :
											item.attributes.source === 'Blog' ?
												<LinkPreview
													url={item.attributes.url}
												/> :
												item.attributes.source === 'Youtube' ? <YouTubeEmbed placeholderDisabled url={item.attributes.url} width="100%" height="200" /> :
													<h3>Not a blog or tweet</h3>}
									</div>
								</div>
							))
							}
						</div>
					)}
				</div>
			</div>
		</React.Fragment>
	)

}