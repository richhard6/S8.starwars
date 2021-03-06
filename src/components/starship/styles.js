import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1.5rem;
  border: 1px solid black;
  justify-content: center;
  align-items: ${(props) => (props.detail ? 'center' : 'space-between')};
  height: ${(props) => (props.detail ? '100vh' : '')};
`

export const ImageBox = styled.div`
  width: 30vw;
`

export const ContentBox = styled.div`
  width: 30vw;
`

export const StarshipName = styled.h2`
  font-weight: 800;
  background-color: #121212;
  padding: 1rem;
`

export const StarshipInfo = styled.div`
  font-weight: 300;
  diplay: flex;
  flex-direction: column;
  border-radius: 8px;
  background-color: #121212;
  padding: 2rem;
  height: 55vh;
`

export const StarshipModel = styled.h3`
  font-style: italic;
  font-weight: 200;
  margin-bottom: 1rem;
`

export const SManufacturer = styled.h3`
  font-weight: 900;
  margin-bottom: 1rem;
`

export const SPassengers = styled.h3`
  font-weight: 500;
  margin-bottom: 1rem;
`

export const SClass = styled.h4`
  font-weight: 300;
`
export const SMainInfo = styled.div`
  display: flex;
  flex-direction: column;
  &:hover {
    cursor: ${(props) => (props.starship ? 'pointer' : '')};
  }
`

export const Image = styled.img`
  width: 100%;
  border-radius: 8px;
`
