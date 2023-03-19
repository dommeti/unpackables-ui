import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
	return (
		<div className='header'>
			<Link to='/'>Unpackables</Link>
			<h1>A collection of "how I taught myself ..." stories</h1>
		</div>
	)
}