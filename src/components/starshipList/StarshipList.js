import Starship from '../starship/Starship'
import { Link } from 'react-router-dom'

function StarshipList({ starships }) {
  //aqui se mostrara solo el nombre del starship con una pequeña imagen, y al entrar estara toda la info correspondiente.
  //react router /starships/"x starship"
  console.log(starships.results)

  return (
    <div>
      {starships.results &&
        starships.results.map((starship, index) => (
          <Link to={`starship/${starship.name}`}>
            <Starship key={index} starship={starship} />
          </Link>
        ))}
    </div>
  )
}

export default StarshipList
