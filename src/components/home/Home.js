import { useEffect, useState } from 'react'

import StarshipList from '../starshipList/StarshipList'

function Home() {
  //migrar esto a APp.js y hacer este el componente de HOME, de bienvenida, Start go
  const [starships, setStarships] = useState([])

  useEffect(() => {
    fetch('https://swapi.dev/api/starships/')
      .then((data) => data.json())
      .then((starships) => setStarships(starships))
  }, [])

  console.log(starships)

  return <StarshipList starships={starships} />
}

export default Home
