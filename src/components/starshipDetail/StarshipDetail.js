import { useEffect, useState } from 'react'

import { useParams, useNavigate } from 'react-router-dom'
import FilmsList from '../filmsList/FilmsList'
import { Button } from '../home/styles'

import {
  Wrapper,
  SMainInfo,
  ImageBox,
  Image,
  StarshipInfo,
  StarshipModel,
  SManufacturer,
  SPassengers,
  SClass,
  StarshipName,
} from '../starship/styles'

function StarshipDetail() {
  const [starship, setStarship] = useState({})

  const navigate = useNavigate()

  const { name } = useParams()

  console.log(name)

  useEffect(() => {
    fetch(`https://swapi.dev/api/starships/${name}`)
      .then((data) => data.json())
      .then((starships) => setStarship(starships))
  }, [name])

  const url = `https://starwars-visualguide.com/assets/img/starships/${name}.jpg`

  return (
    <Wrapper detail>
      <SMainInfo>
        <StarshipName>{starship.name} </StarshipName>
        <ImageBox>
          <Image src={url} alt={starship.name} />
        </ImageBox>
      </SMainInfo>
      <StarshipInfo>
        <StarshipModel>{starship.model}model</StarshipModel>
        <SManufacturer>{starship.manufacturer} manufacturer</SManufacturer>
        <SPassengers> {starship.passengers} passengers</SPassengers>
        <SClass> {starship.starship_class} starship class</SClass>
        <FilmsList films={starship.films} />
        <FilmsList films={starship.pilots} pilots={true} />
        <Button small onClick={() => navigate(-1)}>
          ⬅back
        </Button>
      </StarshipInfo>
    </Wrapper>
  )
}

export default StarshipDetail
