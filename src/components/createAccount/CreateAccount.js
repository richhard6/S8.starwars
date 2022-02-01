import { useState } from 'react'

import { Wrapper, Input } from './styles'

import { Button } from '../home/styles'

import { useNavigate } from 'react-router-dom'

function CreateAccount() {
  const [user, setUser] = useState({ username: '', password: '' })
  let navigate = useNavigate()

  const createUser = () => {
    if (user.username && user.password !== '') {
      localStorage.setItem(user.username, JSON.stringify(user))
      sessionStorage.setItem('currentUser', JSON.stringify(user))
      navigate('../starshiplist')
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
        type="password"
        onChange={(e) =>
          setUser((prevUser) => {
            return {
              ...prevUser,
              password: e.target.value,
            }
          })
        }
      />

      <Button small onClick={createUser}>
        Create Account
      </Button>
    </Wrapper>
  )
}

export default CreateAccount
