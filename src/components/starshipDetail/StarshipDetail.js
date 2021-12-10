import { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'

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
  //agarrar el numero de la URL y ghacer el fetch indivual ... !
  const [starship, setStarship] = useState({})

  const { name } = useParams()

  console.log(name)

  useEffect(() => {
    fetch(`https://swapi.dev/api/starships/${name}`)
      .then((data) => data.json())
      .then((starships) => setStarship(starships))
  }, [name])

  const url = `https://starwars-visualguide.com/assets/img/starships/${name}.jpg`

  console.log(starship)
  return (
    <Wrapper>
      <SMainInfo>
        <StarshipName>{starship.name} name</StarshipName>
        <ImageBox>
          <Image src={url} alt={starship.name} />
        </ImageBox>
      </SMainInfo>
      <StarshipInfo>
        <StarshipModel>{starship.model}model</StarshipModel>
        <SManufacturer>{starship.manufacturer} manufacturer</SManufacturer>
        <SPassengers> {starship.passengers} passengers</SPassengers>
        <SClass> {starship.starship_class} starship class</SClass>
      </StarshipInfo>
    </Wrapper>
  )
}

export default StarshipDetail