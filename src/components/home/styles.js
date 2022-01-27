import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const Button = styled.button`
  cursor: pointer;
  padding: 1.5rem;
  color: white;
  background-color: white;
  border-radius: 8px;
  background-color: black;
  margin-top: 2rem;
  border: none;
  font-weight: 900;
  font-size: ${(props) => (props.small ? '1rem' : '3rem')};
`

export const Title = styled.h1`
  color: white;
`
