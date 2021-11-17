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

function Starship({ starship }) {
  return (
    <Wrapper>
      <SMainInfo>
        <StarshipName>{starship.name} name</StarshipName>
        <ImageBox>asd</ImageBox>
      </SMainInfo>
      <StarshipInfo>
        <StarshipModel>{starship.model}model</StarshipModel> cursiva
        <SManufacturer>{starship.manufacturer} manufacturer</SManufacturer>
        <SPassengers> {starship.passengers} passengers</SPassengers>
        <SClass> {starship.starship_class} starship class</SClass>
      </StarshipInfo>
    </Wrapper>
  )
}

export default Starship
