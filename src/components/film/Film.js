import React, { useEffect, useState } from 'react'

function Film({ url, pilots }) {
  const [film, setFilm] = useState([])

  useEffect(() => {
    fetch(url)
      .then((data) => data.json())
      .then((film) => setFilm(film))
  }, [url])

  console.log(url)

  return (
    <>
      <div>{!pilots ? film.title : film.name} </div>
    </>
  )
}

export default Film
