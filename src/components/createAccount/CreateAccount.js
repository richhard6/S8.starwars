import { useState } from 'react'

import { Wrapper, Input } from './styles'

import { Button } from '../home/styles'

function CreateAccount() {
  const [user, setUser] = useState({ username: '', password: '' })

  const createUser = () => {
    if (user.username && user.password !== '') {
      localStorage.setItem(user.username, JSON.stringify(user))
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

      <Button small onClick={createUser}>
        Create Account
      </Button>
    </Wrapper>
  )
}

export default CreateAccount
