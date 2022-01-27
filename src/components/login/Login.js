import { useState } from 'react'

import { Wrapper, Input } from '../createAccount/styles'

import { Button } from '../home/styles'

import { useNavigate } from 'react-router-dom'

function Login() {
  const [user, setUser] = useState({ name: '', password: '' })
  const navigate = useNavigate()
  const allStorage = () => {
    let values = [],
      keys = Object.keys(localStorage),
      i = keys.length

    while (i--) {
      let item = JSON.parse(localStorage.getItem(keys[i]))
      values.push(item)
    }

    return values
  }

  const logIn = () => {
    const allUsers = allStorage()

    const isMatch = allUsers.find(
      (element) => element.username === user.username
    )

    if (isMatch) {
      const succesfull = isMatch.password === user.password
      if (succesfull) {
        sessionStorage.setItem('currentUser', JSON.stringify(isMatch))
        console.log('logged in')
        navigate('../starshiplist')
      } else {
        console.log('wrong password')
      }
    }
  }

  return (
    <Wrapper>
      <Input
        placeholder="username"
        value={user.username}
        onChange={(e) =>
          setUser((prevUser) => {
            return {
              //same
              ...prevUser,
              username: e.target.value,
            }
          })
        }
      />

      <Input
        placeholder="password"
        value={user.password}
        onChange={(e) =>
          setUser((prevUser) => {
            return {
              ...prevUser,
              password: e.target.value,
            }
          })
        }
      />

      <Button small onClick={logIn}>
        Log In
      </Button>
    </Wrapper>
  )
}

export default Login
