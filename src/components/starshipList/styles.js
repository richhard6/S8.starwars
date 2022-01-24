import styled from 'styled-components'
import { keyframes } from 'styled-components'

const animation = keyframes`
 0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const Spinner = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;
  animation-name: ${animation};
  animation-duration: 8s;
  animation-iteration-count: infinite;
  margin-top: 2.5rem;
  &:after {
    content: ' ';
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid black;
    border-color: #fff black #fff black;
    animation: lds-dual-ring 1.2s linear infinite;
  }
`
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
`
