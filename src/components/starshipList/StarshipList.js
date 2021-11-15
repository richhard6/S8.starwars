import Starship from '../starship/Starship'

function StarshipList({ starships }) {
  //aqui se mostrara solo el nombre del starship con una pequeña imagen, y al entrar estara toda la info correspondiente.
  //react router /starships/"x starship"
  console.log(starships.results)
  return (
    <div>
      {starships.results &&
        starships.results.map((starship, index) => (
          <Starship key={index} starship={starship} />
        ))}
    </div>
  )
}

export default StarshipList
