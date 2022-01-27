import Starship from '../starship/Starship'
import { useNavigate } from 'react-router-dom'
import { urlNumbers } from '../../utils/utils'
import useNearScreen from '../../hooks/useNearScreen'
import debounce from 'just-debounce-it'
import { useState, useEffect, useCallback, useRef } from 'react'
import { Spinner, Wrapper } from './styles'

import { useUser } from '../../hooks/useUser'

function StarshipList({ starships, setPage, page, setLoading, loading }) {
  const navigate = useNavigate()
  const currentUser = useUser()

  useEffect(() => {
    console.log(currentUser)
    /*  if (currentUser) {
     
    } */
    setTimeout(() => {
      if (currentUser.name === '') navigate('../create') // salta a la pagina aunque este logeado porque al principion esta vacio.
    }, 4000)
  }, [currentUser, navigate])

  const externalRef = useRef()

  const { isNearScreen } = useNearScreen({
    externalRef: false ? null : externalRef,
    once: false,
  })

  const debouceHandleNextPage = useCallback(
    debounce(() => setPage((prevPage) => prevPage + 1), 2300),
    []
  )

  useEffect(() => {
    console.log(isNearScreen, page)
    if (isNearScreen) {
      if (page < 4) setLoading(true)
      debouceHandleNextPage()
    }
  }, [debouceHandleNextPage, isNearScreen, page, setLoading])

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
      <Wrapper>
        {loading && <Spinner />}
        <div id="visor" ref={externalRef}></div>
      </Wrapper>
    </>
  )
}

export default StarshipList
