import React, { useEffect, useState } from 'react'

function Film({ url }) {
  const [film, setFilm] = useState([])

  console.log(url)

  useEffect(() => {
    fetch(url)
      .then((data) => data.json())
      .then((film) => setFilm(film))
  }, [url])

  return <div>{film.title}</div>
}

export default Film
