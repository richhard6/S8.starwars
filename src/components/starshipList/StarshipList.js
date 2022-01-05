import Starship from '../starship/Starship'
import { useNavigate } from 'react-router-dom'
import { urlNumbers } from '../../utils/utils'
import useNearScreen from '../../hooks/useNearScreen'
import debounce from 'just-debounce-it'
import { useState, useEffect, useCallback, useRef } from 'react'

function StarshipList({ starships, setPage, page }) {
  const navigate = useNavigate()

  const externalRef = useRef()

  const { isNearScreen } = useNearScreen({
    externalRef: true ? null : externalRef,
    once: false,
  })

  const debouceHandleNextPage = useCallback(
    debounce(() => setPage((prevPage) => prevPage + 1), 2000),
    []
  )

  useEffect(() => {
    console.log(isNearScreen, page)
    if (isNearScreen) debouceHandleNextPage()
  }, [debouceHandleNextPage, isNearScreen, page])

  //al llegar al final ya sale true, hay que hacer que hace un nuevo fetch con el page number nuevo y añadir al array que ya se habia creado con la info de las naves

  const handleClick = (starship) => {
    navigate(`/starships/${starship}`)
  }

  return (
    <>
      {starships.results &&
        starships.results.map((starship, index) => {
          const sanitizedUrl = urlNumbers(starship.url)

          return (
            <div onClick={() => handleClick(sanitizedUrl)} key={index}>
              <Starship starship={starship} />
            </div>
          )
        })}
      <div id="visor" ref={externalRef}></div>
    </>
  )
}

export default StarshipList
