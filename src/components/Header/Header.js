import React from 'react'
import { Link } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'

const CATEGORIES = gql`
 query GetCategories {
	categories {
    data {
      attributes {
        name
				slug
      }
    }
  }
 }
`

export default function Header() {
	const { error, loading, data } = useQuery(CATEGORIES)

	if (loading) return <p>Loading categories ...</p>
	if (error) return <p>Error fetching categories</p>

	return (
		<div className='header'>
			<Link to='/'>Unpackables</Link>
			<h1>A collection of "how I taught myself ..." stories</h1>
			<nav className='category-links'>
				{data.categories.data.map(category => (
					<Link key={category.id} to={`/${category.attributes.slug}`}>{category.attributes.name}</Link>
				))
				}
			</nav>
		</div>
	)
}