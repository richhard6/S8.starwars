import React, { useState } from 'react'
import Film from '../film/Film'
import { Button } from '../home/styles'
import { Wrapper } from './styles'

function FilmsList({ films, pilots }) {
  const [show, setShow] = useState(false)
  console.log(pilots)
  return (
    <Wrapper>
      <Button small onClick={() => setShow(!show)}>
        {pilots === true ? 'view pilot list' : 'view film list'}
      </Button>
      {show &&
        films.map((filmUrl, index) => (
          <Film key={index} url={filmUrl} pilots={pilots} />
        ))}
    </Wrapper>
  )
}

export default FilmsList
