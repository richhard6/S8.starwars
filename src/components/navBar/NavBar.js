import React, { useEffect, useState } from 'react'
import { Wrapper } from './styles'
import { NavLink } from './styles'

function NavBar() {
  const [logged, setLogged] = useState(false)

  useEffect(() => {
    const getCurrentUser = JSON.parse(sessionStorage.getItem('currentUser'))

    if (getCurrentUser) setLogged(true)

    console.log(logged)
  }, [logged])

  return (
    <Wrapper>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/starshiplist">Starships</NavLink>
      {!logged && <NavLink to="/create">Create Account</NavLink>}
      {!logged && <NavLink to="login">Log In</NavLink>}
    </Wrapper>
  )
}

export default NavBar
