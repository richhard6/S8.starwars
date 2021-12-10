import Starship from '../starship/Starship'
import { useNavigate } from 'react-router-dom'

import { urlNumbers } from '../../utils/utils'

function StarshipList({ starships }) {
  const navigate = useNavigate()
  //aqui se mostrara solo el nombre del starship con una pequeña imagen, y al entrar estara toda la info correspondiente.
  //react router /starships/"x starship"

  const handleClick = (starship) => {
    navigate(`/starships/${starship}`)
  }

  return (
    <div>
      {starships.results &&
        starships.results.map((starship, index) => {
          const sanitizedUrl = urlNumbers(starship.url)

          return (
            <div onClick={() => handleClick(sanitizedUrl)} key={index}>
              <Starship starship={starship} />
            </div>
          )
        })}
    </div>
  )
}

export default StarshipList
