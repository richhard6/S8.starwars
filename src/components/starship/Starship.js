import {
  ImageBox,
  StarshipInfo,
  StarshipName,
  Wrapper,
  StarshipModel,
  SManufacturer,
  SPassengers,
  SClass,
  SMainInfo,
  Image,
} from './styles'

import { urlNumbers } from '../../utils/utils'

import { useState, useEffect } from 'react'

function Starship({ starship }) {
  const [url, setUrl] = useState('')

  useEffect(() => {
    setUrl(
      (prevUrl) =>
        (prevUrl = `https://starwars-visualguide.com/assets/img/starships/${urlNumbers(
          starship.url
        )}.jpg`)
    )
  }, [starship.url])

  //Quizas aqui solo debamos mostrar la foto con el nombre, y al hacer click ahi si la demas info

  return (
    <Wrapper>
      <SMainInfo>
        <StarshipName>{starship.name} name</StarshipName>
        <ImageBox>
          <Image src={url} alt={starship.name} />
        </ImageBox>
      </SMainInfo>
      {/*        <StarshipInfo>
        <StarshipModel>{starship.model}model</StarshipModel>
        <SManufacturer>{starship.manufacturer} manufacturer</SManufacturer>
        <SPassengers> {starship.passengers} passengers</SPassengers>
        <SClass> {starship.starship_class} starship class</SClass>
      </StarshipInfo> */}
    </Wrapper>
  )
}

export default Starship
