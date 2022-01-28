import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  justify-content: space-around;
  align-items: center;
  height: 100px;
`

export const NavLink = styled(Link)`
  padding: 20px;
  color: white;
  text-decoration: none;
  background: #121212;
  font-weight: 700;
  border-radius: 8px;
`
