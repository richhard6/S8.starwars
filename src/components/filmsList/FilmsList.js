import React, { useState } from 'react'
import Film from '../film/Film'

function FilmsList({ films }) {
  const [show, setShow] = useState(false)
  console.log(films)
  return (
    <>
      <button onClick={() => setShow(!show)}>view film list</button>
      {show &&
        films.map((filmUrl, index) => <Film key={index} url={filmUrl} />)}
    </>
  )
}

export default FilmsList
