import Starship from '../starship/Starship'
import { Link } from 'react-router-dom'

function StarshipList({ starships }) {
  //aqui se mostrara solo el nombre del starship con una pequeña imagen, y al entrar estara toda la info correspondiente.
  //react router /starships/"x starship"

  return (
    <div>
      {starships.results &&
        starships.results.map((starship, index) => (
          <Link to={`starship/${starship.name}`} key={index}>
            <Starship starship={starship} />
          </Link>
        ))}
    </div>
  )
}

export default StarshipList
