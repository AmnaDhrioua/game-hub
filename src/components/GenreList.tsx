import React from 'react'
import useGenres from '../hooks2/useGenres';

const GenrelList = () => {
  const {genres} = useGenres();
  return (
    <ul>
      {genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
    </ul>
  )
}

export default GenrelList