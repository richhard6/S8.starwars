import React, { useState } from 'react'
import Film from '../film/Film'

function FilmsList({ films, pilots }) {
  const [show, setShow] = useState(false)
  console.log(pilots)
  return (
    <>
      <button onClick={() => setShow(!show)}>
        {pilots === true ? 'view pilot list' : 'view film list'}
      </button>
      {show &&
        films.map((filmUrl, index) => (
          <Film key={index} url={filmUrl} pilots={pilots} />
        ))}
    </>
  )
}

export default FilmsList
