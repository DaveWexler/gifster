import React from 'react'
import GifItem from './gifItem'

const GifList = props => {
	const gifItems = props.gifs.map((image) => {
		return <GifItem key={image.id} gif={image} />
	})


	return (
		<ul>{gifItems}</ul>

	)
}

export default GifList