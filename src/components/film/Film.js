import React, { useEffect, useState } from 'react'

function Film({ url, pilots }) {
  const [film, setFilm] = useState([])

  console.log(url)

  useEffect(() => {
    fetch(url)
      .then((data) => data.json())
      .then((film) => setFilm(film))
  }, [url])

  return <div>{!pilots ? film.title : film.name} </div>
}

export default Film
