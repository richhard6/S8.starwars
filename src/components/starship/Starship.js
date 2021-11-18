import {
  ImageBox,
  ContentBox,
  StarshipInfo,
  StarshipName,
  Wrapper,
  StarshipModel,
  SManufacturer,
  SPassengers,
  SClass,
  SMainInfo,
} from './styles'

import { useState, useEffect } from 'react'

function Starship({ starship }) {
  const [url, setUrl] = useState('')
  let starshipImg = starship.url.search(/[0-9]/)
  useEffect(() => {
    let starshipNumber = starship.url.charAt(starshipImg)
    let starshipURL = `https://starwars-visualguide.com/assets/img/starships/${starshipNumber}.jpg`
    //hay un  problemac on los numeros de dos cifrs.... dsolo pilla el primer numero
    setUrl((prevUrl) => (prevUrl = starshipURL))
  }, [starship.url, starshipImg])

  /* `https://starwars-visualguide.com/assets/img/starships/${starshipImg}.jpg` */
  return (
    <Wrapper>
      <SMainInfo>
        <StarshipName>{starship.name} name</StarshipName>
        <ImageBox>
          <img src={url} alt={starship.name} />
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

export default Starship
