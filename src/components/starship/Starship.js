import { ImageBox, StarshipName, Wrapper, SMainInfo, Image } from './styles'

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

  return (
    <Wrapper>
      <SMainInfo starship>
        <StarshipName>{starship.name} </StarshipName>
        <ImageBox>
          <Image src={url} alt={starship.name} />
        </ImageBox>
      </SMainInfo>
    </Wrapper>
  )
}

export default Starship
