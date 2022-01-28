import React from 'react'
import { Wrapper } from './styles'
import { NavLink } from './styles'

function NavBar() {
  return (
    <Wrapper>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/starshiplist">Starships</NavLink>
      <NavLink to="/create">Create Account</NavLink>
      <NavLink to="login">Log In</NavLink>
    </Wrapper>
  )
}

export default NavBar
