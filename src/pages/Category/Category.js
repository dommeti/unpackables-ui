import React from 'react'
import { TwitterEmbed, YouTubeEmbed } from 'react-social-media-embed'
import LinkPreview from '../../hooks/LinkPreview'
import { useQuery, gql } from '@apollo/client'

import '../HomePage/HomePage.scss'
import { useParams } from 'react-router-dom'

const CATEGORY = gql`
	query GetCategory($slug: String!) {
		categories(filters: { slug: { eq: $slug } }) {
			data {
				id,
				attributes {
					name,
					slug,
					nuggets {
						data {
							id,
							attributes {
								title,
								source,
								url,
							}
						}
					}
				}
			}
		}
	}
`

export default function Category() {
	const { slug } = useParams()
	const { error, loading, data } = useQuery(CATEGORY, {
		variables: { slug: slug }
	})

	if (loading) return <p>Loading...</p>
	if (error) return <p>Error :(</p>

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
							{data.categories.data.map(category => (
								<div key={category.attributes.id} className="category">
									{category.attributes.nuggets.data.map(nugget => (
										<div key={nugget.attributes.id} className="nugget-card">
											<div style={{ display: 'flex', justifyContent: 'left' }}>
												{nugget.attributes.source === 'Twitter' ? <TwitterEmbed placeholderDisabled url={nugget.attributes.url} width="100%" /> :
													nugget.attributes.source === 'Blog' ?
														<LinkPreview
															url={nugget.attributes.url}
														/> :
														nugget.attributes.source === 'Youtube' ? <YouTubeEmbed placeholderDisabled url={nugget.attributes.url} width="100%" height="200" /> :
															<h3>Not a blog or tweet</h3>}
											</div>
										</div>
									))}
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